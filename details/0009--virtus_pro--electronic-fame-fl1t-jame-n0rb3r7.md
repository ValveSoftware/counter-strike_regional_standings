### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [9](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1735.3<br />
<br />
Final Rank Value (1735.3) = Starting Rank Value (1755.1) + Head To Head Adjustments (-19.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.685[<sup>1</sup>](#table2)
- Bounty Collected: 0.647[<sup>2</sup>](#table1)
- Opponent Network: 0.321[<sup>2</sup>](#table1)
- LAN Wins: 0.917[<sup>2</sup>](#table1)

The average of these factors is 0.643<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1755.1
- 400 + ( ( 0.643 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1755.1


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
|           43 |      178 | 2024-06-15 | Natus Vincere | L   | 1.000      | -            | -                | -                | -         |    -9.00 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           42 |      215 | 2024-06-14 | Astralis      | W   | 1.000      | 0.729        | 0.546 (0.398)    | 0.461 (0.336)    | 1 (1.000) |    20.15 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           41 |      254 | 2024-06-13 | Spirit        | L   | 1.000      | -            | -                | -                | -         |    -5.14 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           40 |      289 | 2024-06-12 | Vitality      | W   | 1.000      | 0.729        | 0.733 (0.534)    | 0.395 (0.288)    | 1 (1.000) |    24.96 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      837 | 2024-05-29 | BIG           | L   | 0.914      | -            | -                | -                | -         |   -24.38 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      852 | 2024-05-28 | FaZe          | L   | 0.908      | -            | -                | -                | -         |    -7.01 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |      875 | 2024-05-27 | HEROIC        | W   | 0.901      | 0.624        | 0.338 (0.190)    | 0.480 (0.270)    | 1 (0.901) |    13.85 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |     1165 | 2024-05-17 | Falcons       | L   | 0.832      | -            | -                | -                | -         |   -18.64 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |     1205 | 2024-05-16 | MOUZ          | L   | 0.825      | -            | -                | -                | -         |    -5.17 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |     1305 | 2024-05-14 | Falcons       | W   | 0.813      | 0.769        | 0.352 (0.220)    | -                | 1 (0.813) |     6.74 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1427 | 2024-05-09 | Complexity    | L   | 0.779      | -            | -                | -                | -         |    -9.80 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |     1443 | 2024-05-08 | The MongolZ   | W   | 0.774      | 0.889        | 1.000 (0.688)    | 0.692 (0.476)    | 1 (0.774) |    17.60 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |     1462 | 2024-05-07 | GamerLegion   | W   | 0.767      | 0.889        | 0.243 (0.165)    | 0.345 (0.235)    | 1 (0.767) |     1.72 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |     1650 | 2024-04-28 | SAW           | W   | 0.706      | 0.889        | 0.147 (0.093)    | 0.526 (0.330)    | 1 (0.706) |     1.81 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1680 | 2024-04-27 | fnatic        | W   | 0.699      | 0.889        | 0.298 (0.185)    | 0.623 (0.387)    | 1 (0.699) |     5.62 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           28 |     1722 | 2024-04-25 | FaZe          | L   | 0.687      | -            | -                | -                | -         |    -5.47 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           27 |     1746 | 2024-04-24 | SAW           | W   | 0.679      | 0.889        | -                | 0.526 (0.318)    | 1 (0.679) |     1.46 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           26 |     1767 | 2024-04-23 | fnatic        | L   | 0.672      | -            | -                | -                | -         |   -15.73 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           25 |     2064 | 2024-04-12 | G2            | L   | 0.597      | -            | -                | -                | -         |    -5.42 | fame, FL1T, Jame, mir, n0rb3r7        |
|           24 |     2145 | 2024-04-10 | Astralis      | L   | 0.584      | -            | -                | -                | -         |    -5.50 | fame, FL1T, Jame, mir, n0rb3r7        |
|           23 |     2200 | 2024-04-09 | FlyQuest      | W   | 0.577      | -            | -                | -                | 1 (0.577) |     1.68 | fame, FL1T, Jame, mir, n0rb3r7        |
|           22 |     2230 | 2024-04-08 | Wildcard      | W   | 0.571      | -            | -                | -                | -         |     0.24 | fame, FL1T, Jame, mir, n0rb3r7        |
|           21 |     2530 | 2024-03-24 | G2            | L   | 0.473      | -            | -                | -                | -         |    -4.46 | fame, FL1T, Jame, mir, n0rb3r7        |
|           20 |     2544 | 2024-03-23 | Eternal Fire  | L   | 0.466      | -            | -                | -                | -         |    -7.22 | fame, FL1T, Jame, mir, n0rb3r7        |
|           19 |     2562 | 2024-03-22 | HEROIC        | W   | 0.458      | 1.000        | 0.338 (0.155)    | 0.480 (0.220)    | -         |     7.48 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2575 | 2024-03-21 | paiN          | W   | 0.454      | 1.000        | 0.478 (0.217)    | 0.768 (0.349)    | -         |     3.90 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     2586 | 2024-03-21 | Imperial      | L   | 0.452      | -            | -                | -                | -         |   -11.69 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     2787 | 2024-03-12 | HEROIC        | W   | 0.394      | -            | -                | -                | -         |     6.31 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     2802 | 2024-03-11 | Apeks         | W   | 0.388      | -            | -                | -                | -         |     0.27 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2813 | 2024-03-11 | B8            | W   | 0.387      | -            | -                | -                | -         |     0.42 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     3395 | 2024-02-15 | Natus Vincere | W   | 0.220      | -            | -                | -                | -         |     4.86 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     3427 | 2024-02-14 | fnatic        | W   | 0.214      | -            | -                | -                | -         |     2.17 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3445 | 2024-02-14 | SAW           | W   | 0.212      | -            | -                | -                | -         |     0.42 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3626 | 2024-02-02 | Cloud9        | L   | 0.133      | -            | -                | -                | -         |    -3.97 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3662 | 2024-02-01 | GamerLegion   | L   | 0.126      | -            | -                | -                | -         |    -3.92 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3674 | 2024-01-31 | Rooster       | W   | 0.120      | -            | -                | -                | -         |     0.02 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3727 | 2024-01-27 | BIG           | W   | 0.094      | -            | -                | -                | -         |     0.37 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3768 | 2024-01-25 | Cloud9        | W   | 0.080      | -            | -                | -                | -         |     0.13 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3783 | 2024-01-24 | BIG           | W   | 0.074      | -            | -                | -                | -         |     0.29 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     3897 | 2024-01-20 | fnatic        | W   | 0.046      | -            | -                | -                | -         |     0.48 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     3952 | 2024-01-19 | Natus Vincere | L   | 0.040      | -            | -                | -                | -         |    -0.38 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     4007 | 2024-01-18 | SAW           | W   | 0.034      | -            | -                | -                | -         |     0.06 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     4023 | 2024-01-18 | SINNERS       | W   | 0.033      | -            | -                | -                | -         |     0.03 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($89,692.81)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-02 |      0.941 | $5,000.00      | $4,705.01       |
| 2024-05-12 |      0.800 | $32,000.00     | $25,595.38      |
| 2024-04-14 |      0.612 | $10,000.00     | $6,117.33       |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-02-02 |      0.134 | $4,500.00      | $605.19         |
| 2024-01-28 |      0.100 | $22,500.00     | $2,257.13       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
