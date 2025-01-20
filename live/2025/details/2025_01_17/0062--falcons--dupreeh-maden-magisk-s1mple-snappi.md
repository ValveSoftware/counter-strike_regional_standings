### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [62](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [44]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1007.7<br />
<br />
Final Rank Value (1007.7) = Starting Rank Value (966.0) + Head To Head Adjustments (41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.480[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.251[<sup>2</sup>](#table1)

The average of these factors is 0.285<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 966.0
- 400 + ( ( 0.285 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 966.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      711 | 2024-11-19 | GamerLegion     | L   | 0.804      | -            | -                | -                | -         |    -3.32 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      727 | 2024-11-17 | SAW             | L   | 0.796      | -            | -                | -                | -         |    -3.67 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      738 | 2024-11-17 | FaZe            | L   | 0.791      | -            | -                | -                | -         |    -0.23 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      751 | 2024-11-16 | ECLOT           | W   | 0.789      | 0.143        | 0.286 (0.032)    | 1.000 (0.113)    | 1 (0.789) |    18.47 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1254 | 2024-10-26 | Eternal Fire    | L   | 0.644      | -            | -                | -                | -         |    -1.94 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1275 | 2024-10-25 | SAW             | L   | 0.637      | -            | -                | -                | -         |    -2.78 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1311 | 2024-10-21 | Virtus.pro      | L   | 0.612      | -            | -                | -                | -         |    -2.89 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1318 | 2024-10-21 | 3DMAX           | L   | 0.611      | -            | -                | -                | -         |    -2.44 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     2034 | 2024-09-26 | FaZe            | L   | 0.444      | -            | -                | -                | -         |    -0.10 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2085 | 2024-09-25 | Natus Vincere   | L   | 0.437      | -            | -                | -                | -         |    -0.19 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2426 | 2024-09-14 | RED Canids      | L   | 0.364      | -            | -                | -                | -         |    -4.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2458 | 2024-09-13 | Virtus.pro      | L   | 0.358      | -            | -                | -                | -         |    -1.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2496 | 2024-09-12 | ATOX            | W   | 0.351      | 0.889        | 0.126 (0.039)    | 0.455 (0.142)    | 1 (0.351) |     8.18 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2523 | 2024-09-11 | FURIA           | L   | 0.345      | -            | -                | -                | -         |    -0.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2891 | 2024-08-29 | Virtus.pro      | L   | 0.257      | -            | -                | -                | -         |    -1.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2926 | 2024-08-28 | Falcons         | L   | 0.252      | -            | -                | -                | -         |    -0.11 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2946 | 2024-08-28 | Spirit          | L   | 0.250      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2977 | 2024-08-27 | Eternal Fire    | L   | 0.246      | -            | -                | -                | -         |    -1.00 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     3002 | 2024-08-27 | paiN            | L   | 0.244      | -            | -                | -                | -         |    -0.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     3038 | 2024-08-26 | 3DMAX           | W   | 0.240      | 0.143        | 0.430 (0.015)    | 0.576 (0.020)    | 0 (0.000) |     6.85 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3060 | 2024-08-26 | OG              | W   | 0.239      | 0.143        | 0.171 (0.006)    | 0.288 (0.010)    | 0 (0.000) |     3.29 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3082 | 2024-08-26 | 9z              | W   | 0.237      | -            | -                | -                | 1 (0.237) |     3.70 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3103 | 2024-08-25 | Virtus.pro      | W   | 0.233      | 0.535        | 0.133 (0.017)    | 0.382 (0.048)    | -         |     6.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3115 | 2024-08-25 | BetBoom         | W   | 0.230      | 0.143        | 0.112 (0.004)    | 0.474 (0.016)    | 1 (0.230) |     4.82 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3128 | 2024-08-24 | Complexity      | W   | 0.225      | 0.535        | 0.121 (0.015)    | 0.292 (0.035)    | -         |     6.25 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3134 | 2024-08-24 | 9z              | L   | 0.224      | -            | -                | -                | -         |    -3.43 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3176 | 2024-08-22 | M80             | W   | 0.213      | 0.535        | 0.140 (0.016)    | 0.437 (0.050)    | -         |     5.02 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3486 | 2024-08-13 | FaZe            | L   | 0.151      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3534 | 2024-08-12 | Virtus.pro      | W   | 0.145      | 1.000        | 0.133 (0.019)    | 0.382 (0.055)    | 1 (0.145) |     3.93 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3560 | 2024-08-11 | MOUZ            | L   | 0.138      | -            | -                | -                | -         |    -0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3601 | 2024-08-09 | BIG             | W   | 0.126      | 0.143        | 0.257 (0.005)    | -                | 1 (0.126) |     3.63 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3623 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.119      | 0.143        | -                | 0.683 (0.012)    | 1 (0.119) |     2.66 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3667 | 2024-08-07 | Eternal Fire    | L   | 0.112      | -            | -                | -                | -         |    -0.38 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3855 | 2024-08-02 | Astralis        | L   | 0.078      | -            | -                | -                | -         |    -0.32 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3977 | 2024-07-30 | GamerLegion     | W   | 0.059      | -            | -                | -                | 1 (0.059) |     0.54 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4008 | 2024-07-29 | Astralis        | L   | 0.053      | -            | -                | -                | -         |    -0.21 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,710.64)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.653 | $2,000.00      | $1,305.19       |
| 2024-09-29 |      0.466 | $10,000.00     | $4,657.15       |
| 2024-09-22 |      0.420 | $7,000.00      | $2,938.11       |
| 2024-09-01 |      0.278 | $5,000.00      | $1,389.40       |
| 2024-08-25 |      0.233 | $20,000.00     | $4,658.54       |
| 2024-08-18 |      0.186 | $16,000.00     | $2,981.17       |
| 2024-08-04 |      0.092 | $8,500.00      | $781.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
