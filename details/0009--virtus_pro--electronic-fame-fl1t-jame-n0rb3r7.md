### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1740.8<br />
<br />
Final Rank Value (1740.8) = Starting Rank Value (1776.3) + Head To Head Adjustments (-35.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.684[<sup>1</sup>](#table2)
- Bounty Collected: 0.674[<sup>2</sup>](#table1)
- Opponent Network: 0.402[<sup>2</sup>](#table1)
- LAN Wins: 0.949[<sup>2</sup>](#table1)

The average of these factors is 0.677<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1776.3
- 400 + ( ( 0.677 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1776.3


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
|           43 |       42 | 2024-06-15 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -8.55 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           42 |       79 | 2024-06-14 | Astralis      | W   | 1.000      | 0.729        | 0.533 (0.389)    | 0.501 (0.365)    | 1 (1.000) |    19.46 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           41 |      118 | 2024-06-13 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -5.26 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           40 |      153 | 2024-06-12 | Vitality      | W   | 1.000      | 0.729        | 0.738 (0.538)    | 0.414 (0.302)    | 1 (1.000) |    24.76 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      703 | 2024-05-29 | BIG           | L   | 1.000      | -            | -                | -                | -         |   -26.29 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      718 | 2024-05-28 | FaZe          | L   | 1.000      | -            | -                | -                | -         |    -6.66 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |      741 | 2024-05-27 | HEROIC        | W   | 1.000      | 0.624        | 0.354 (0.221)    | 0.545 (0.340)    | 1 (1.000) |    14.77 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |     1031 | 2024-05-17 | Falcons       | L   | 0.988      | -            | -                | -                | -         |   -21.94 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |     1071 | 2024-05-16 | MOUZ          | L   | 0.981      | -            | -                | -                | -         |    -5.35 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |     1171 | 2024-05-14 | Falcons       | W   | 0.969      | 0.769        | 0.381 (0.284)    | -                | 1 (0.969) |     7.99 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1293 | 2024-05-09 | Complexity    | L   | 0.935      | -            | -                | -                | -         |   -12.53 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |     1309 | 2024-05-08 | The MongolZ   | W   | 0.930      | 0.889        | 0.986 (0.815)    | 0.681 (0.563)    | 1 (0.930) |    18.74 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |     1328 | 2024-05-07 | GamerLegion   | W   | 0.923      | 0.889        | 0.239 (0.196)    | 0.336 (0.276)    | 1 (0.923) |     2.15 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |     1516 | 2024-04-28 | SAW           | W   | 0.862      | 0.889        | 0.140 (0.108)    | 0.571 (0.437)    | 1 (0.862) |     2.76 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1546 | 2024-04-27 | fnatic        | W   | 0.854      | 0.889        | 0.290 (0.220)    | 0.666 (0.506)    | 1 (0.854) |     5.00 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           28 |     1588 | 2024-04-25 | FaZe          | L   | 0.843      | -            | -                | -                | -         |    -5.81 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           27 |     1612 | 2024-04-24 | SAW           | W   | 0.835      | 0.889        | -                | 0.571 (0.424)    | 1 (0.835) |     2.17 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           26 |     1633 | 2024-04-23 | fnatic        | L   | 0.828      | -            | -                | -                | -         |   -21.25 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           25 |     1930 | 2024-04-12 | G2            | L   | 0.753      | -            | -                | -                | -         |    -7.04 | fame, FL1T, Jame, mir, n0rb3r7        |
|           24 |     2011 | 2024-04-10 | Astralis      | L   | 0.740      | -            | -                | -                | -         |    -7.87 | fame, FL1T, Jame, mir, n0rb3r7        |
|           23 |     2066 | 2024-04-09 | FlyQuest      | W   | 0.733      | -            | -                | -                | 1 (0.733) |     2.43 | fame, FL1T, Jame, mir, n0rb3r7        |
|           22 |     2096 | 2024-04-08 | Wildcard      | W   | 0.726      | -            | -                | -                | -         |     0.30 | fame, FL1T, Jame, mir, n0rb3r7        |
|           21 |     2397 | 2024-03-24 | G2            | L   | 0.629      | -            | -                | -                | -         |    -6.20 | fame, FL1T, Jame, mir, n0rb3r7        |
|           20 |     2411 | 2024-03-23 | Eternal Fire  | L   | 0.621      | -            | -                | -                | -         |    -8.38 | fame, FL1T, Jame, mir, n0rb3r7        |
|           19 |     2429 | 2024-03-22 | HEROIC        | W   | 0.614      | 1.000        | 0.354 (0.218)    | 0.545 (0.335)    | -         |     9.73 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2442 | 2024-03-21 | paiN          | W   | 0.609      | 1.000        | 0.492 (0.300)    | 0.775 (0.472)    | -         |     5.17 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     2453 | 2024-03-21 | Imperial      | L   | 0.608      | -            | -                | -                | -         |   -15.45 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     2654 | 2024-03-12 | HEROIC        | W   | 0.550      | -            | -                | -                | -         |     8.43 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     2669 | 2024-03-11 | Apeks         | W   | 0.543      | -            | -                | -                | -         |     0.48 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2680 | 2024-03-11 | B8            | W   | 0.542      | -            | -                | -                | -         |     0.52 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     3262 | 2024-02-15 | Natus Vincere | W   | 0.375      | -            | -                | -                | -         |     8.44 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     3294 | 2024-02-14 | fnatic        | W   | 0.369      | -            | -                | -                | -         |     2.92 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3312 | 2024-02-14 | SAW           | W   | 0.367      | -            | -                | -                | -         |     0.90 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3493 | 2024-02-02 | Cloud9        | L   | 0.289      | -            | -                | -                | -         |    -8.37 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3529 | 2024-02-01 | GamerLegion   | L   | 0.282      | -            | -                | -                | -         |    -8.70 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3541 | 2024-01-31 | Rooster       | W   | 0.276      | -            | -                | -                | -         |     0.04 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3594 | 2024-01-27 | BIG           | W   | 0.250      | -            | -                | -                | -         |     1.04 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3635 | 2024-01-25 | Cloud9        | W   | 0.236      | -            | -                | -                | -         |     0.57 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3650 | 2024-01-24 | BIG           | W   | 0.229      | -            | -                | -                | -         |     0.92 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3764 | 2024-01-20 | fnatic        | W   | 0.202      | -            | -                | -                | -         |     1.67 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     3819 | 2024-01-19 | Natus Vincere | L   | 0.196      | -            | -                | -                | -         |    -1.84 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     3874 | 2024-01-18 | SAW           | W   | 0.189      | -            | -                | -                | -         |     0.43 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     3890 | 2024-01-18 | SINNERS       | W   | 0.188      | -            | -                | -                | -         |     0.15 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($103,842.70)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-02 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-05-12 |      0.956 | $32,000.00     | $30,576.91      |
| 2024-04-14 |      0.767 | $10,000.00     | $7,674.06       |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-02-02 |      0.290 | $4,500.00      | $1,305.72       |
| 2024-01-28 |      0.256 | $22,500.00     | $5,759.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
