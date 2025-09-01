### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, Chr1zN, nicoodoz, spooke<br />
Global Rank: [30](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [22]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  1213.9<br />
<br />
Final Rank Value (1213.9) = Starting Rank Value (1126.6) + Head To Head Adjustments (87.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.501[<sup>1</sup>](#table2)
- Bounty Collected: 0.489[<sup>2</sup>](#table1)
- Opponent Network: 0.317[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.379<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1126.6
- 400 + ( ( 0.379 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 1126.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       26 | 2025-08-30 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |   -10.27 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           62 |       55 | 2025-08-29 | Metizport      | W   | 1.000      | 0.435        | -                | 0.489 (0.212)    | 0 (0.000) |     4.27 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           61 |      163 | 2025-08-22 | BC.Game        | L   | 1.000      | -            | -                | -                | -         |   -23.04 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           60 |      176 | 2025-08-21 | fnatic         | W   | 1.000      | 0.486        | 0.111 (0.054)    | 0.752 (0.366)    | 0 (0.000) |    18.93 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           59 |      219 | 2025-08-19 | Partizan       | W   | 1.000      | 0.486        | 0.063 (0.031)    | 1.000 (0.486)    | 0 (0.000) |     9.79 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           58 |      266 | 2025-08-17 | FUT            | W   | 1.000      | 0.143        | 0.221 (0.032)    | -                | 0 (0.000) |    13.29 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           57 |      332 | 2025-08-15 | JiJieHao       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.97 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           56 |      372 | 2025-08-14 | TNL            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.72 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           55 |      515 | 2025-08-10 | PARIVISION     | W   | 1.000      | 0.435        | 0.123 (0.054)    | 0.977 (0.425)    | 0 (0.000) |    14.02 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           54 |      527 | 2025-08-10 | Sangal         | L   | 1.000      | -            | -                | -                | -         |   -25.20 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           53 |      529 | 2025-08-10 | SAW            | W   | 1.000      | 0.435        | 0.253 (0.110)    | -                | -         |    22.23 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           52 |      554 | 2025-08-09 | ENCE           | W   | 1.000      | 0.435        | 0.151 (0.066)    | 1.000 (0.435)    | -         |    19.87 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           51 |      572 | 2025-08-08 | Tricked        | W   | 1.000      | 0.435        | -                | 0.543 (0.236)    | -         |    10.22 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           50 |      589 | 2025-08-07 | MOUZ           | L   | 1.000      | -            | -                | -                | -         |    -0.37 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           49 |      674 | 2025-08-01 | FUT            | L   | 0.993      | -            | -                | -                | -         |   -16.98 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           48 |      846 | 2025-07-21 | 9INE           | W   | 0.920      | -            | -                | -                | -         |    12.15 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           47 |      850 | 2025-07-21 | Rounds         | W   | 0.920      | -            | -                | -                | -         |     0.45 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           46 |      986 | 2025-07-15 | FUT            | L   | 0.881      | -            | -                | -                | -         |   -14.53 | adamb, Chr1zN, F1KU, nicoodoz, spooke      |
|           45 |      992 | 2025-07-15 | Nemiga         | L   | 0.880      | -            | -                | -                | -         |   -12.21 | adamb, Chr1zN, F1KU, nicoodoz, spooke      |
|           44 |     1009 | 2025-07-14 | Gentle Mates   | W   | 0.874      | -            | -                | -                | -         |    19.20 | adamb, Chr1zN, F1KU, nicoodoz, spooke      |
|           43 |     1305 | 2025-06-20 | fnatic         | L   | 0.713      | -            | -                | -                | -         |    -4.49 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           42 |     1338 | 2025-06-18 | RUBY           | W   | 0.699      | 0.480        | -                | 0.851 (0.285)    | -         |     3.63 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           41 |     1547 | 2025-06-08 | Falcons        | L   | 0.635      | -            | -                | -                | -         |    -0.63 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           40 |     1562 | 2025-06-07 | M80            | L   | 0.629      | -            | -                | -                | -         |    -9.55 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           39 |     1575 | 2025-06-07 | Virtus.pro     | L   | 0.627      | -            | -                | -                | -         |    -3.85 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           38 |     1598 | 2025-06-05 | NRG            | W   | 0.614      | 0.624        | 0.073 (0.028)    | 0.735 (0.282)    | 1 (0.614) |    10.50 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           37 |     1613 | 2025-06-04 | TYLOO          | W   | 0.607      | 0.624        | 0.897 (0.340)    | 0.614 (0.233)    | 1 (0.607) |    18.61 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           36 |     1625 | 2025-06-03 | B8             | L   | 0.601      | -            | -                | -                | -         |    -5.10 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           35 |     1635 | 2025-06-03 | Passion UA     | W   | 0.600      | 0.624        | 0.195 (0.073)    | -                | 1 (0.600) |    12.73 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           34 |     1861 | 2025-05-18 | PARIVISION     | L   | 0.492      | -            | -                | -                | -         |    -9.83 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           33 |     1879 | 2025-05-17 | 9INE           | W   | 0.485      | 0.435        | -                | 1.000 (0.211)    | -         |    10.33 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           32 |     1912 | 2025-05-15 | Sangal         | W   | 0.475      | -            | -                | -                | -         |     3.83 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           31 |     2165 | 2025-05-06 | Sangal         | L   | 0.414      | -            | -                | -                | -         |   -10.39 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           30 |     2195 | 2025-05-05 | Zero Tenacity  | W   | 0.407      | -            | -                | -                | -         |     2.74 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           29 |     2255 | 2025-05-03 | Spirit Academy | L   | 0.393      | -            | -                | -                | -         |    -8.29 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           28 |     2424 | 2025-04-26 | ECLOT          | W   | 0.346      | -            | -                | -                | -         |     2.21 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           27 |     2626 | 2025-04-15 | Metizport      | W   | 0.274      | -            | -                | -                | -         |     2.05 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           26 |     2646 | 2025-04-14 | 9 Pandas       | W   | 0.267      | -            | -                | -                | -         |     1.07 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           25 |     2654 | 2025-04-14 | Astralis       | W   | 0.266      | 0.525        | 0.833 (0.116)    | -                | -         |     8.02 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           24 |     2868 | 2025-04-05 | Sashi          | W   | 0.207      | -            | -                | -                | -         |     1.71 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           23 |     3145 | 2025-03-29 | Fire Flux      | W   | 0.159      | -            | -                | -                | -         |     0.58 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           22 |     3213 | 2025-03-28 | BetBoom        | L   | 0.152      | -            | -                | -                | -         |    -0.73 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           21 |     3256 | 2025-03-27 | ECLOT          | L   | 0.148      | -            | -                | -                | -         |    -3.70 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           20 |     3274 | 2025-03-27 | Monte          | L   | 0.146      | -            | -                | -                | -         |    -4.27 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           19 |     3457 | 2025-03-21 | Sangal         | W   | 0.108      | -            | -                | -                | -         |     0.63 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           18 |     3484 | 2025-03-20 | Fire Flux      | W   | 0.099      | -            | -                | -                | -         |     0.34 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           17 |     3589 | 2025-03-17 | FAVBET         | W   | 0.081      | -            | -                | -                | -         |     0.38 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           16 |     3607 | 2025-03-16 | 500            | W   | 0.074      | -            | -                | -                | -         |     0.16 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           15 |     3612 | 2025-03-16 | PARIVISION     | W   | 0.074      | -            | -                | -                | -         |     0.79 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           14 |     3624 | 2025-03-15 | Betclic        | W   | 0.068      | -            | -                | -                | -         |     0.85 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           13 |     3645 | 2025-03-15 | inputprayers   | L   | 0.066      | -            | -                | -                | -         |    -2.01 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           12 |     3653 | 2025-03-14 | Nemiga         | W   | 0.061      | -            | -                | -                | -         |     0.99 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           11 |     3662 | 2025-03-14 | 9INE           | L   | 0.060      | -            | -                | -                | -         |    -0.52 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|           10 |     3670 | 2025-03-13 | Betclic        | W   | 0.055      | -            | -                | -                | -         |     0.69 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            9 |     3691 | 2025-03-12 | Betclic        | L   | 0.048      | -            | -                | -                | -         |    -0.90 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            8 |     3717 | 2025-03-11 | HEROIC         | W   | 0.039      | -            | -                | -                | -         |     1.15 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            7 |     3733 | 2025-03-10 | fnatic         | W   | 0.035      | -            | -                | -                | -         |     0.92 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            6 |     3746 | 2025-03-10 | FUT            | W   | 0.034      | -            | -                | -                | -         |     0.35 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            5 |     3806 | 2025-03-09 | SINNERS        | W   | 0.027      | -            | -                | -                | -         |     0.17 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            4 |     3872 | 2025-03-08 | Passion UA     | W   | 0.020      | -            | -                | -                | -         |     0.36 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            3 |     3883 | 2025-03-08 | 9INE           | L   | 0.020      | -            | -                | -                | -         |    -0.17 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            2 |     3930 | 2025-03-07 | SINNERS        | W   | 0.014      | -            | -                | -                | -         |     0.09 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |
|            1 |     3948 | 2025-03-07 | ENCE           | W   | 0.013      | -            | -                | -                | -         |     0.32 | Buzz, Chr1zN, F1KU, nicoodoz, spooke       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,418.55)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-08-31 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-08-22 |      1.000 | $5,833.00      | $5,833.00       |
| 2025-08-10 |      1.000 | $22,000.00     | $22,000.00      |
| 2025-06-22 |      0.727 | $2,750.00      | $1,999.34       |
| 2025-06-10 |      0.648 | $10,000.00     | $6,483.71       |
| 2025-05-18 |      0.494 | $5,000.00      | $2,471.02       |
| 2025-03-16 |      0.074 | $22,000.00     | $1,631.48       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
