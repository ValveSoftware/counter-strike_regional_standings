### Roster Details<br />
Team Name: Falcons<br />
Roster: dupreeh, Maden, Magisk, s1mple, Snappi<br />
Global Rank: [62](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [43]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1033.6<br />
<br />
Final Rank Value (1033.6) = Starting Rank Value (988.0) + Head To Head Adjustments (45.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.486[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.058[<sup>2</sup>](#table1)
- LAN Wins: 0.269[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 988.0
- 400 + ( ( 0.296 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 988.0


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
|           36 |      707 | 2024-11-19 | GamerLegion     | L   | 0.832      | -            | -                | -                | -         |    -4.68 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           35 |      723 | 2024-11-17 | SAW             | L   | 0.824      | -            | -                | -                | -         |    -3.92 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           34 |      734 | 2024-11-17 | FaZe            | L   | 0.820      | -            | -                | -                | -         |    -0.29 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           33 |      747 | 2024-11-16 | ECLOT           | W   | 0.818      | 0.143        | 0.284 (0.033)    | 1.000 (0.117)    | 1 (0.818) |    18.42 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           32 |     1250 | 2024-10-26 | Eternal Fire    | L   | 0.673      | -            | -                | -                | -         |    -2.06 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           31 |     1271 | 2024-10-25 | SAW             | L   | 0.666      | -            | -                | -                | -         |    -3.00 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           30 |     1307 | 2024-10-21 | Virtus.pro      | L   | 0.641      | -            | -                | -                | -         |    -3.22 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           29 |     1314 | 2024-10-21 | 3DMAX           | L   | 0.639      | -            | -                | -                | -         |    -2.77 | dupreeh, Maden, Magisk, s1mple, Snappi   |
|           28 |     2030 | 2024-09-26 | FaZe            | L   | 0.473      | -            | -                | -                | -         |    -0.13 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           27 |     2081 | 2024-09-25 | Natus Vincere   | L   | 0.466      | -            | -                | -                | -         |    -0.22 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           26 |     2422 | 2024-09-14 | RED Canids      | L   | 0.393      | -            | -                | -                | -         |    -5.27 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           25 |     2454 | 2024-09-13 | Virtus.pro      | L   | 0.387      | -            | -                | -                | -         |    -2.23 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           24 |     2492 | 2024-09-12 | ATOX            | W   | 0.379      | 0.889        | 0.153 (0.052)    | 0.539 (0.182)    | 1 (0.379) |     9.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           23 |     2519 | 2024-09-11 | FURIA           | L   | 0.373      | -            | -                | -                | -         |    -0.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           22 |     2887 | 2024-08-29 | Virtus.pro      | L   | 0.286      | -            | -                | -                | -         |    -1.60 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           21 |     2922 | 2024-08-28 | HEROIC          | L   | 0.280      | -            | -                | -                | -         |    -0.14 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           20 |     2942 | 2024-08-28 | Spirit          | L   | 0.279      | -            | -                | -                | -         |    -0.04 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           19 |     2973 | 2024-08-27 | Eternal Fire    | L   | 0.274      | -            | -                | -                | -         |    -1.16 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           18 |     2998 | 2024-08-27 | paiN            | L   | 0.272      | -            | -                | -                | -         |    -0.57 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           17 |     3034 | 2024-08-26 | 3DMAX           | W   | 0.268      | 0.143        | 0.441 (0.017)    | 0.587 (0.022)    | 0 (0.000) |     7.61 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           16 |     3056 | 2024-08-26 | OG              | W   | 0.267      | 0.143        | 0.171 (0.007)    | -                | 0 (0.000) |     3.45 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           15 |     3078 | 2024-08-26 | 9z              | W   | 0.265      | -            | -                | -                | 1 (0.265) |     3.97 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           14 |     3099 | 2024-08-25 | Virtus.pro      | W   | 0.261      | 0.535        | 0.146 (0.020)    | 0.333 (0.047)    | -         |     6.94 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           13 |     3111 | 2024-08-25 | BetBoom         | W   | 0.259      | 0.143        | -                | 0.428 (0.016)    | 1 (0.259) |     5.17 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           12 |     3124 | 2024-08-24 | Complexity      | W   | 0.254      | 0.535        | 0.126 (0.017)    | 0.297 (0.040)    | -         |     7.01 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           11 |     3130 | 2024-08-24 | 9z              | L   | 0.252      | -            | -                | -                | -         |    -4.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|           10 |     3172 | 2024-08-22 | M80             | W   | 0.241      | 0.535        | 0.144 (0.019)    | 0.445 (0.057)    | -         |     5.58 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            9 |     3482 | 2024-08-13 | FaZe            | L   | 0.180      | -            | -                | -                | -         |    -0.03 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            8 |     3530 | 2024-08-12 | Virtus.pro      | W   | 0.173      | 1.000        | 0.146 (0.025)    | 0.333 (0.058)    | 1 (0.173) |     4.67 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            7 |     3556 | 2024-08-11 | MOUZ            | L   | 0.166      | -            | -                | -                | -         |    -0.05 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            6 |     3597 | 2024-08-09 | BIG             | W   | 0.154      | 0.143        | 0.257 (0.006)    | -                | 1 (0.154) |     4.42 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            5 |     3619 | 2024-08-08 | ALTERNATE aTTaX | W   | 0.148      | 0.143        | -                | 0.688 (0.015)    | 1 (0.148) |     3.20 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            4 |     3663 | 2024-08-07 | Eternal Fire    | L   | 0.141      | -            | -                | -                | -         |    -0.48 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            3 |     3851 | 2024-08-02 | Astralis        | L   | 0.107      | -            | -                | -                | -         |    -0.47 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            2 |     3973 | 2024-07-30 | GamerLegion     | W   | 0.088      | 0.581        | 0.200 (0.010)    | 0.606 (0.031)    | 1 (0.088) |     2.52 | dupreeh, Maden, Magisk, Snappi, SunPayus |
|            1 |     4004 | 2024-07-29 | Astralis        | L   | 0.081      | -            | -                | -                | -         |    -0.35 | dupreeh, Maden, Magisk, Snappi, SunPayus |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,660.72)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.681 | $2,000.00      | $1,362.12       |
| 2024-09-29 |      0.494 | $10,000.00     | $4,941.83       |
| 2024-09-22 |      0.448 | $7,000.00      | $3,137.39       |
| 2024-09-01 |      0.306 | $5,000.00      | $1,531.74       |
| 2024-08-25 |      0.261 | $20,000.00     | $5,227.91       |
| 2024-08-18 |      0.215 | $16,000.00     | $3,436.67       |
| 2024-08-04 |      0.120 | $8,500.00      | $1,023.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
