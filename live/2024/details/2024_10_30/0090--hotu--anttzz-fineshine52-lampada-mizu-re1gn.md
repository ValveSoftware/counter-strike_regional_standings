### Roster Details<br />
Team Name: HOTU<br />
Roster: anttzz, fineshine52, lampada, mizu, Re1GN<br />
Global Rank: [90](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [65]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  906.5<br />
<br />
Final Rank Value (906.5) = Starting Rank Value (833.6) + Head To Head Adjustments (72.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.387[<sup>2</sup>](#table1)
- Opponent Network: 0.177[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.219<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 833.6
- 400 + ( ( 0.219 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 833.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       29 | 2024-10-29 | SINNERS           | W   | 1.000      | 0.384        | 0.187 (0.072)    | 0.890 (0.342)    | 0 (0.000) |    24.19 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           37 |       60 | 2024-10-27 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -8.23 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           36 |      120 | 2024-10-24 | UNiTY             | W   | 1.000      | 0.143        | 0.050 (0.007)    | -                | 0 (0.000) |    19.11 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           35 |      155 | 2024-10-21 | 9INE              | L   | 1.000      | -            | -                | -                | -         |    -8.81 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           34 |      258 | 2024-10-17 | TSM               | W   | 1.000      | 0.384        | 0.086 (0.033)    | 0.722 (0.278)    | 0 (0.000) |    20.48 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           33 |      312 | 2024-10-15 | ALTERNATE aTTaX   | W   | 1.000      | 0.143        | 0.082 (0.012)    | 0.746 (0.107)    | 0 (0.000) |    19.30 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           32 |      362 | 2024-10-11 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -11.45 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           31 |      411 | 2024-10-09 | 500               | L   | 1.000      | -            | -                | -                | -         |   -15.23 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           30 |      503 | 2024-10-06 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -11.68 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           29 |      568 | 2024-10-04 | RUBY              | W   | 1.000      | 0.435        | 0.040 (0.017)    | 0.293 (0.127)    | 0 (0.000) |    14.02 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           28 |      638 | 2024-10-02 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -13.00 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           27 |      650 | 2024-10-02 | Gaimin Gladiators | W   | 1.000      | 0.143        | -                | 0.708 (0.101)    | 0 (0.000) |    19.58 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           26 |      689 | 2024-10-01 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -6.94 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           25 |      696 | 2024-10-01 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -13.21 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           24 |      747 | 2024-09-29 | DMS               | W   | 0.991      | -            | -                | -                | 0 (0.000) |    18.09 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           23 |      777 | 2024-09-28 | ENCE Academy      | W   | 0.985      | -            | -                | -                | 0 (0.000) |     9.88 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           22 |      922 | 2024-09-25 | Molotov           | W   | 0.965      | -            | -                | -                | 0 (0.000) |    11.42 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           21 |      964 | 2024-09-24 | ENCE Academy      | L   | 0.960      | -            | -                | -                | -         |   -20.22 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           20 |     1029 | 2024-09-22 | ARCRED            | W   | 0.946      | 0.384        | 0.023 (0.008)    | 0.285 (0.104)    | 0 (0.000) |    15.38 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           19 |     1036 | 2024-09-22 | WW                | L   | 0.945      | -            | -                | -                | -         |   -24.18 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           18 |     1054 | 2024-09-21 | GenOne            | W   | 0.940      | -            | -                | -                | -         |     4.76 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           17 |     1074 | 2024-09-20 | DMS               | L   | 0.933      | -            | -                | -                | -         |   -14.90 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           16 |     1113 | 2024-09-19 | CYBERSHOKE        | L   | 0.926      | -            | -                | -                | -         |    -8.70 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           15 |     1123 | 2024-09-19 | GenOne            | W   | 0.925      | -            | -                | -                | -         |     3.90 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           14 |     1288 | 2024-09-13 | FAVBET            | L   | 0.887      | -            | -                | -                | -         |   -11.41 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           13 |     1301 | 2024-09-13 | ex-Enterprise     | W   | 0.885      | 0.384        | 0.037 (0.013)    | 0.445 (0.151)    | -         |    14.74 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           12 |     1352 | 2024-09-11 | Passion UA        | W   | 0.874      | 0.372        | 0.221 (0.072)    | 1.000 (0.325)    | -         |    20.46 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           11 |     1423 | 2024-09-08 | Spirit Academy    | L   | 0.854      | -            | -                | -                | -         |    -7.23 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|           10 |     1512 | 2024-09-05 | MOUZ NXT          | W   | 0.834      | 0.372        | 0.052 (0.016)    | 0.332 (0.103)    | -         |    16.84 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|            9 |     1526 | 2024-09-05 | RUSH B            | W   | 0.833      | -            | -                | -                | -         |    13.82 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|            8 |     1588 | 2024-09-03 | ex-Enterprise     | W   | 0.820      | 0.372        | 0.037 (0.011)    | 0.445 (0.136)    | -         |    16.94 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|            7 |     1680 | 2024-08-30 | SINNERS           | L   | 0.792      | -            | -                | -                | -         |    -2.24 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|            6 |     2255 | 2024-08-15 | QUAZAR            | L   | 0.693      | -            | -                | -                | -         |   -18.21 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|            5 |     2258 | 2024-08-15 | KOI               | W   | 0.693      | -            | -                | -                | -         |    12.60 | anttzz, fineshine52, lampada, mizu, Re1GN      |
|            4 |     3722 | 2024-06-13 | VP.Prodigy        | L   | 0.273      | -            | -                | -                | -         |    -5.07 | anttzz, fineshine52, lampada, mizu, swiftsteel |
|            3 |     4248 | 2024-05-31 | CYBERSHOKE        | L   | 0.186      | -            | -                | -                | -         |    -1.88 | anttzz, fineshine52, lampada, mizu, swiftsteel |
|            2 |     4259 | 2024-05-30 | Spirit Academy    | L   | 0.181      | -            | -                | -                | -         |    -1.38 | anttzz, fineshine52, lampada, mizu, swiftsteel |
|            1 |     4286 | 2024-05-29 | LEON              | W   | 0.175      | -            | -                | -                | -         |     1.38 | anttzz, fineshine52, lampada, mizu, swiftsteel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,436.67)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.940 | $750.00        | $704.73         |
| 2024-06-16 |      0.293 | $2,500.00      | $731.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
