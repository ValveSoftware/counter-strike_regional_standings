### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: electroNic, fame, FL1T, Jame, n0rb3r7<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [7](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1752.2<br />
<br />
Final Rank Value (1752.2) = Starting Rank Value (1793.4) + Head To Head Adjustments (-41.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.816[<sup>1</sup>](#table2)
- Bounty Collected: 0.679[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.944[<sup>2</sup>](#table1)

The average of these factors is 0.688<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1793.4
- 400 + ( ( 0.688 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1793.4


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
|           40 |      132 | 2024-07-20 | G2            | L   | 1.000      | -            | -                | -                | -         |    -7.60 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           39 |      172 | 2024-07-19 | Vitality      | W   | 1.000      | 1.000        | 0.749 (0.749)    | 0.381 (0.381)    | 1 (1.000) |    20.89 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           38 |      277 | 2024-07-17 | Complexity    | W   | 1.000      | 1.000        | 0.405 (0.405)    | 0.378 (0.378)    | 1 (1.000) |    11.53 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           37 |      630 | 2024-06-15 | Natus Vincere | L   | 0.941      | -            | -                | -                | -         |    -6.77 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           36 |      667 | 2024-06-14 | Astralis      | W   | 0.934      | 0.729        | 0.457 (0.311)    | 0.398 (0.271)    | 1 (0.934) |    13.92 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           35 |      706 | 2024-06-13 | Spirit        | L   | 0.927      | -            | -                | -                | -         |    -7.22 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           34 |      741 | 2024-06-12 | Vitality      | W   | 0.920      | 0.729        | 0.749 (0.502)    | 0.381 (0.256)    | 1 (0.920) |    20.54 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           33 |     1289 | 2024-05-29 | BIG           | L   | 0.827      | -            | -                | -                | -         |   -23.75 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           32 |     1304 | 2024-05-28 | FaZe          | L   | 0.821      | -            | -                | -                | -         |    -9.85 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           31 |     1327 | 2024-05-27 | HEROIC        | W   | 0.814      | 0.624        | 0.272 (0.138)    | 0.404 (0.205)    | 1 (0.814) |     8.14 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           30 |     1617 | 2024-05-17 | Falcons       | L   | 0.746      | -            | -                | -                | -         |   -19.95 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           29 |     1657 | 2024-05-16 | MOUZ          | L   | 0.738      | -            | -                | -                | -         |    -5.79 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           28 |     1757 | 2024-05-14 | Falcons       | W   | 0.727      | 0.769        | 0.276 (0.154)    | -                | 1 (0.727) |     3.02 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           27 |     1879 | 2024-05-09 | Complexity    | L   | 0.693      | -            | -                | -                | -         |   -12.57 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           26 |     1895 | 2024-05-08 | The MongolZ   | W   | 0.687      | 0.889        | 1.000 (0.611)    | 0.725 (0.443)    | 1 (0.687) |    13.84 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           25 |     1914 | 2024-05-07 | GamerLegion   | W   | 0.680      | 0.889        | 0.205 (0.124)    | -                | 1 (0.680) |     0.85 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           24 |     2102 | 2024-04-28 | SAW           | W   | 0.619      | 0.889        | -                | 0.500 (0.275)    | 1 (0.619) |     0.92 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           23 |     2132 | 2024-04-27 | fnatic        | W   | 0.612      | 0.889        | 0.428 (0.233)    | 0.666 (0.362)    | 1 (0.612) |     4.46 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           22 |     2174 | 2024-04-25 | FaZe          | L   | 0.600      | -            | -                | -                | -         |    -8.23 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           21 |     2198 | 2024-04-24 | SAW           | W   | 0.593      | 0.889        | -                | 0.500 (0.264)    | -         |     0.73 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           20 |     2219 | 2024-04-23 | fnatic        | L   | 0.586      | -            | -                | -                | -         |   -14.23 | electroNic, fame, FL1T, Jame, n0rb3r7 |
|           19 |     2516 | 2024-04-12 | G2            | L   | 0.511      | -            | -                | -                | -         |    -4.03 | fame, FL1T, Jame, mir, n0rb3r7        |
|           18 |     2597 | 2024-04-10 | Astralis      | L   | 0.498      | -            | -                | -                | -         |    -8.89 | fame, FL1T, Jame, mir, n0rb3r7        |
|           17 |     2652 | 2024-04-09 | FlyQuest      | W   | 0.491      | -            | -                | -                | -         |     0.74 | fame, FL1T, Jame, mir, n0rb3r7        |
|           16 |     2682 | 2024-04-08 | Wildcard      | W   | 0.484      | -            | -                | -                | -         |     0.03 | fame, FL1T, Jame, mir, n0rb3r7        |
|           15 |     2982 | 2024-03-24 | G2            | L   | 0.386      | -            | -                | -                | -         |    -3.09 | fame, FL1T, Jame, mir, n0rb3r7        |
|           14 |     2996 | 2024-03-23 | Eternal Fire  | L   | 0.379      | -            | -                | -                | -         |    -7.79 | fame, FL1T, Jame, mir, n0rb3r7        |
|           13 |     3014 | 2024-03-22 | HEROIC        | W   | 0.372      | -            | -                | -                | -         |     3.26 | fame, FL1T, Jame, mir, n0rb3r7        |
|           12 |     3027 | 2024-03-21 | paiN          | W   | 0.367      | 1.000        | 0.393 (0.144)    | 0.825 (0.303)    | -         |     1.73 | fame, FL1T, Jame, mir, n0rb3r7        |
|           11 |     3038 | 2024-03-21 | Imperial      | L   | 0.365      | -            | -                | -                | -         |   -10.60 | fame, FL1T, Jame, mir, n0rb3r7        |
|           10 |     3239 | 2024-03-12 | HEROIC        | W   | 0.307      | -            | -                | -                | -         |     2.52 | fame, FL1T, Jame, mir, n0rb3r7        |
|            9 |     3254 | 2024-03-11 | Apeks         | W   | 0.301      | -            | -                | -                | -         |     0.10 | fame, FL1T, Jame, mir, n0rb3r7        |
|            8 |     3265 | 2024-03-11 | B8            | W   | 0.300      | -            | -                | -                | -         |     0.18 | fame, FL1T, Jame, mir, n0rb3r7        |
|            7 |     3847 | 2024-02-15 | Natus Vincere | W   | 0.133      | -            | -                | -                | -         |     3.18 | fame, FL1T, Jame, mir, n0rb3r7        |
|            6 |     3879 | 2024-02-14 | fnatic        | W   | 0.127      | -            | -                | -                | -         |     1.05 | fame, FL1T, Jame, mir, n0rb3r7        |
|            5 |     3897 | 2024-02-14 | SAW           | W   | 0.125      | -            | -                | -                | -         |     0.13 | fame, FL1T, Jame, mir, n0rb3r7        |
|            4 |     4078 | 2024-02-02 | Cloud9        | L   | 0.046      | -            | -                | -                | -         |    -1.43 | fame, FL1T, Jame, mir, n0rb3r7        |
|            3 |     4114 | 2024-02-01 | GamerLegion   | L   | 0.039      | -            | -                | -                | -         |    -1.22 | fame, FL1T, Jame, mir, n0rb3r7        |
|            2 |     4126 | 2024-01-31 | Rooster       | W   | 0.033      | -            | -                | -                | -         |     0.00 | fame, FL1T, Jame, mir, n0rb3r7        |
|            1 |     4179 | 2024-01-27 | BIG           | W   | 0.007      | -            | -                | -                | -         |     0.01 | fame, FL1T, Jame, mir, n0rb3r7        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($164,386.44)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.59) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $85,000.00     | $85,000.00      |
| 2024-06-16 |      0.946 | $40,000.00     | $37,856.16      |
| 2024-06-02 |      0.854 | $5,000.00      | $4,270.84       |
| 2024-05-12 |      0.713 | $32,000.00     | $22,816.64      |
| 2024-04-14 |      0.525 | $10,000.00     | $5,248.97       |
| 2024-03-31 |      0.434 | $20,000.00     | $8,676.06       |
| 2024-02-02 |      0.048 | $4,500.00      | $214.44         |
| 2024-01-28 |      0.013 | $22,500.00     | $303.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
