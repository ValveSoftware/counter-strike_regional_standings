### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [10](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1728.0<br />
<br />
Final Rank Value (1728.0) = Starting Rank Value (1742.1) + Head To Head Adjustments (-14.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.686[<sup>1</sup>](#table2)
- Bounty Collected: 0.638[<sup>2</sup>](#table1)
- Opponent Network: 0.299[<sup>2</sup>](#table1)
- LAN Wins: 0.876[<sup>2</sup>](#table1)

The average of these factors is 0.625<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1742.1
- 400 + ( ( 0.625 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1742.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      342 | 2024-06-15 | Natus Vincere | L   | 0.988      | -            | -                | -                | -         |    -9.05 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           40 |      379 | 2024-06-14 | Astralis      | W   | 0.981      | 0.729        | 0.549 (0.393)    | 0.434 (0.310)    | 1 (0.981) |    19.71 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      418 | 2024-06-13 | Spirit        | L   | 0.975      | -            | -                | -                | -         |    -5.29 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      453 | 2024-06-12 | Vitality      | W   | 0.967      | 0.729        | 0.733 (0.517)    | 0.416 (0.293)    | 1 (0.967) |    24.85 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |     1001 | 2024-05-29 | BIG           | L   | 0.874      | -            | -                | -                | -         |   -23.60 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |     1016 | 2024-05-28 | FaZe          | L   | 0.869      | -            | -                | -                | -         |    -6.58 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |     1039 | 2024-05-27 | HEROIC        | W   | 0.861      | 0.624        | 0.333 (0.179)    | 0.448 (0.241)    | 1 (0.861) |    13.27 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |     1329 | 2024-05-17 | Falcons       | L   | 0.793      | -            | -                | -                | -         |   -18.21 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1369 | 2024-05-16 | MOUZ          | L   | 0.786      | -            | -                | -                | -         |    -3.99 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |     1469 | 2024-05-14 | Falcons       | W   | 0.774      | 0.769        | 0.344 (0.205)    | -                | 1 (0.774) |     6.04 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |     1591 | 2024-05-09 | Complexity    | L   | 0.740      | -            | -                | -                | -         |    -8.77 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |     1607 | 2024-05-08 | The MongolZ   | W   | 0.735      | 0.889        | 1.000 (0.653)    | 0.653 (0.427)    | 1 (0.735) |    17.02 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1626 | 2024-05-07 | GamerLegion   | W   | 0.728      | 0.889        | 0.244 (0.158)    | 0.333 (0.215)    | 1 (0.728) |     1.64 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           28 |     1814 | 2024-04-28 | SAW           | W   | 0.667      | 0.889        | 0.147 (0.087)    | 0.544 (0.323)    | 1 (0.667) |     1.70 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           27 |     1844 | 2024-04-27 | fnatic        | W   | 0.659      | 0.889        | 0.300 (0.176)    | 0.632 (0.370)    | 1 (0.659) |     5.56 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           26 |     1886 | 2024-04-25 | FaZe          | L   | 0.647      | -            | -                | -                | -         |    -5.01 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           25 |     1910 | 2024-04-24 | SAW           | W   | 0.640      | 0.889        | -                | 0.544 (0.310)    | 1 (0.640) |     1.38 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           24 |     1931 | 2024-04-23 | fnatic        | L   | 0.633      | -            | -                | -                | -         |   -14.54 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           23 |     2228 | 2024-04-12 | G2            | L   | 0.558      | -            | -                | -                | -         |    -3.98 | fame, FL1T, Jame, mir, n0rb3r7        |
|           22 |     2309 | 2024-04-10 | Astralis      | L   | 0.545      | -            | -                | -                | -         |    -5.19 | fame, FL1T, Jame, mir, n0rb3r7        |
|           21 |     2364 | 2024-04-09 | FlyQuest      | W   | 0.538      | -            | -                | -                | 1 (0.538) |     1.56 | fame, FL1T, Jame, mir, n0rb3r7        |
|           20 |     2394 | 2024-04-08 | Wildcard      | W   | 0.531      | -            | -                | -                | -         |     0.05 | fame, FL1T, Jame, mir, n0rb3r7        |
|           19 |     2694 | 2024-03-24 | G2            | L   | 0.434      | -            | -                | -                | -         |    -3.13 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2708 | 2024-03-23 | Eternal Fire  | L   | 0.426      | -            | -                | -                | -         |    -6.76 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     2726 | 2024-03-22 | HEROIC        | W   | 0.419      | 1.000        | 0.333 (0.140)    | 0.448 (0.188)    | -         |     6.79 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     2739 | 2024-03-21 | paiN          | W   | 0.414      | 1.000        | 0.476 (0.197)    | 0.763 (0.316)    | -         |     3.74 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     2750 | 2024-03-21 | Imperial      | L   | 0.412      | -            | -                | -                | -         |   -10.68 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2951 | 2024-03-12 | HEROIC        | W   | 0.354      | -            | -                | -                | -         |     5.63 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     2966 | 2024-03-11 | Apeks         | W   | 0.348      | -            | -                | -                | -         |     0.23 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     2977 | 2024-03-11 | B8            | W   | 0.347      | -            | -                | -                | -         |     0.40 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3559 | 2024-02-15 | Natus Vincere | W   | 0.180      | -            | -                | -                | -         |     3.94 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3591 | 2024-02-14 | fnatic        | W   | 0.174      | -            | -                | -                | -         |     1.83 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3609 | 2024-02-14 | SAW           | W   | 0.172      | -            | -                | -                | -         |     0.35 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3790 | 2024-02-02 | Cloud9        | L   | 0.094      | -            | -                | -                | -         |    -2.81 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3826 | 2024-02-01 | GamerLegion   | L   | 0.086      | -            | -                | -                | -         |    -2.69 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3838 | 2024-01-31 | Rooster       | W   | 0.081      | -            | -                | -                | -         |     0.01 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3891 | 2024-01-27 | BIG           | W   | 0.054      | -            | -                | -                | -         |     0.21 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3932 | 2024-01-25 | Cloud9        | W   | 0.041      | -            | -                | -                | -         |     0.06 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     3947 | 2024-01-24 | BIG           | W   | 0.034      | -            | -                | -                | -         |     0.13 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     4061 | 2024-01-20 | fnatic        | W   | 0.007      | -            | -                | -                | -         |     0.07 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     4116 | 2024-01-19 | Natus Vincere | L   | 0.001      | -            | -                | -                | -         |    -0.01 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($85,714.61)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $40,000.00     | $39,745.16      |
| 2024-06-02 |      0.901 | $5,000.00      | $4,506.96       |
| 2024-05-12 |      0.760 | $32,000.00     | $24,327.85      |
| 2024-04-14 |      0.572 | $10,000.00     | $5,721.22       |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-02-02 |      0.095 | $4,500.00      | $426.95         |
| 2024-01-28 |      0.061 | $22,500.00     | $1,365.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
