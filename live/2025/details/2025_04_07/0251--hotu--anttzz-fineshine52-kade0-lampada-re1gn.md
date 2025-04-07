### Roster Details<br />
Team Name: HOTU<br />
Roster: anttzz, fineshine52, kade0, lampada, Re1GN<br />
Global Rank: [251](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  504.3<br />
<br />
Final Rank Value (504.3) = Starting Rank Value (498.7) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.7
- 400 + ( ( 0.054 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 498.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2491 | 2024-11-14 | Daystar           | W   | 0.238      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.68 | anttzz, fineshine52, kade0, lampada, Re1GN |
|           11 |     2674 | 2024-11-06 | Zero Tenacity     | L   | 0.186      | -            | -                | -                | -         |    -0.74 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|           10 |     2708 | 2024-11-04 | Johnny Speeds     | L   | 0.174      | -            | -                | -                | -         |    -1.00 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            9 |     2774 | 2024-11-01 | Chimera           | L   | 0.154      | -            | -                | -                | -         |    -0.94 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            8 |     2781 | 2024-11-01 | Gaimin Gladiators | L   | 0.153      | -            | -                | -                | -         |    -0.98 | abiraju, anttzz, lampada, mizu, Re1GN      |
|            7 |     2844 | 2024-10-29 | SINNERS           | W   | 0.133      | 0.384        | 0.027 (0.001)    | 0.665 (0.034)    | 0 (0.000) |     3.96 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            6 |     2875 | 2024-10-27 | 9INE              | L   | 0.119      | -            | -                | -                | -         |    -1.21 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            5 |     2937 | 2024-10-24 | UNiTY             | W   | 0.100      | 0.143        | 0.019 (0.000)    | 0.163 (0.002)    | 0 (0.000) |     2.62 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            4 |     2972 | 2024-10-21 | 9INE              | L   | 0.079      | -            | -                | -                | -         |    -0.81 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            3 |     3075 | 2024-10-17 | TSM               | W   | 0.052      | 0.384        | 0.002 (0.000)    | 0.056 (0.001)    | 0 (0.000) |     1.11 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            2 |     3130 | 2024-10-15 | ALTERNATE aTTaX   | W   | 0.039      | 0.143        | 0.013 (0.000)    | 0.146 (0.001)    | 0 (0.000) |     0.98 | anttzz, fineshine52, lampada, mizu, Re1GN  |
|            1 |     3180 | 2024-10-11 | Gaimin Gladiators | L   | 0.013      | -            | -                | -                | -         |    -0.08 | anttzz, fineshine52, lampada, mizu, Re1GN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
