### Roster Details<br />
Team Name: Rooster<br />
Roster: ADK, chelleos, ju1ces, rekonz, SkulL<br />
Global Rank: [197](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [20]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  706.2<br />
<br />
Final Rank Value (706.2) = Starting Rank Value (802.0) + Head To Head Adjustments (-95.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.235[<sup>2</sup>](#table1)

The average of these factors is 0.213<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.0
- 400 + ( ( 0.213 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 802.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      227 | 2026-02-24 | Skele                 | L   | 1.000      | -            | -                | -                | -         |   -18.16 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           27 |      321 | 2026-02-22 | Abyssal               | L   | 1.000      | -            | -                | -                | -         |   -18.63 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           26 |      355 | 2026-02-21 | Skele                 | L   | 1.000      | -            | -                | -                | -         |   -20.31 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           25 |      407 | 2026-02-19 | BBBMBCBS              | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.181 (0.050)    | 0 (0.000) |     5.97 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           24 |      505 | 2026-02-18 | Skele                 | L   | 1.000      | -            | -                | -                | -         |   -20.83 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           23 |      946 | 2026-02-08 | THUNDER dOWNUNDER     | L   | 1.000      | -            | -                | -                | -         |   -11.93 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           22 |      947 | 2026-02-07 | Mindfreak             | W   | 1.000      | 0.305        | 0.021 (0.006)    | 0.428 (0.131)    | 0 (0.000) |    18.77 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           21 |      968 | 2026-02-06 | Underground           | W   | 1.000      | 0.305        | 0.002 (0.000)    | 0.217 (0.066)    | 0 (0.000) |    12.23 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           20 |      974 | 2026-02-06 | Mindfreak             | L   | 1.000      | -            | -                | -                | -         |   -11.24 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           19 |     1180 | 2026-01-31 | Abyssal               | W   | 0.998      | 0.305        | 0.001 (0.000)    | 0.229 (0.070)    | 0 (0.000) |    10.18 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           18 |     1185 | 2026-01-30 | THUNDER dOWNUNDER     | L   | 0.997      | -            | -                | -                | -         |   -12.75 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           17 |     1188 | 2026-01-30 | The Gentlemans Kennel | W   | 0.996      | 0.305        | 0.000 (0.000)    | -                | 0 (0.000) |     3.46 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           16 |     2016 | 2025-12-12 | Mindfreak             | L   | 0.670      | -            | -                | -                | -         |   -14.22 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           15 |     2019 | 2025-12-12 | Ground Zero           | W   | 0.669      | 0.303        | 0.013 (0.003)    | 0.196 (0.040)    | 0 (0.000) |    10.37 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           14 |     2020 | 2025-12-12 | THUNDER dOWNUNDER     | L   | 0.669      | -            | -                | -                | -         |   -10.11 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           13 |     2114 | 2025-12-07 | FURY                  | W   | 0.631      | 0.303        | 0.000 (0.000)    | 0.053 (0.010)    | -         |     3.49 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           12 |     2116 | 2025-12-06 | Animus Victoria       | W   | 0.630      | 0.303        | 0.000 (0.000)    | -                | -         |     3.11 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           11 |     2118 | 2025-12-06 | Ground Zero           | L   | 0.629      | -            | -                | -                | -         |   -10.24 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           10 |     2267 | 2025-11-30 | Mindfreak             | L   | 0.585      | -            | -                | -                | -         |    -7.53 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            9 |     2273 | 2025-11-29 | Underground           | W   | 0.583      | 0.279        | 0.002 (0.000)    | 0.217 (0.035)    | 1 (0.583) |     7.09 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            8 |     2275 | 2025-11-29 | Time Waves            | W   | 0.582      | 0.279        | -                | 0.136 (0.022)    | 1 (0.582) |     2.57 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            7 |     2320 | 2025-11-29 | BBBMBCBS              | W   | 0.578      | 0.279        | -                | 0.181 (0.029)    | 1 (0.578) |     3.15 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            6 |     2321 | 2025-11-28 | Underground           | W   | 0.577      | 0.279        | 0.002 (0.000)    | 0.217 (0.035)    | 1 (0.577) |     7.00 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            5 |     2458 | 2025-11-23 | FURY                  | L   | 0.538      | -            | -                | -                | -         |   -14.15 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            4 |     2528 | 2025-11-21 | Ground Zero           | L   | 0.525      | -            | -                | -                | -         |    -9.72 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            3 |     2563 | 2025-11-20 | boosters              | W   | 0.519      | -            | -                | -                | -         |     1.64 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            2 |     2599 | 2025-11-18 | Mindfreak             | L   | 0.505      | -            | -                | -                | -         |    -6.47 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            1 |     2612 | 2025-11-17 | boosters              | W   | 0.498      | -            | -                | -                | -         |     1.49 | ADK, chelleos, ju1ces, Terryyy, viridian  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,236.67)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      1.000 | $1,408.00      | $1,408.00       |
| 2025-12-13 |      0.677 | $661.00        | $447.42         |
| 2025-11-30 |      0.585 | $652.00        | $381.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
