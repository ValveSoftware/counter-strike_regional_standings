### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [100](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [64]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  753.7<br />
<br />
Final Rank Value (753.7) = Starting Rank Value (733.6) + Head To Head Adjustments (20.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.6
- 400 + ( ( 0.181 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 733.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2241 | 2024-11-24 | Spirit        | L   | 0.306      | -            | -                | -                | -         |    -0.02 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     2248 | 2024-11-23 | 9 Pandas      | W   | 0.303      | 0.143        | 0.102 (0.004)    | 0.880 (0.038)    | 1 (0.303) |     7.98 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     2276 | 2024-11-23 | TSM           | W   | 0.298      | 0.143        | 0.002 (0.000)    | 0.056 (0.002)    | 1 (0.298) |     3.29 | isak, jocab, MisteM, r1nkle, REZ |
|           12 |     2308 | 2024-11-21 | Falcons       | L   | 0.290      | -            | -                | -                | -         |    -0.03 | isak, jocab, MisteM, r1nkle, REZ |
|           11 |     2324 | 2024-11-21 | PARIVISION    | W   | 0.285      | 0.143        | 0.001 (0.000)    | 0.015 (0.001)    | 1 (0.285) |     3.22 | isak, jocab, MisteM, r1nkle, REZ |
|           10 |     2336 | 2024-11-20 | G2            | L   | 0.284      | -            | -                | -                | -         |    -0.03 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     2538 | 2024-11-12 | BetBoom       | L   | 0.226      | -            | -                | -                | -         |    -1.67 | isak, jocab, MisteM, r1nkle, REZ |
|            8 |     2570 | 2024-11-11 | Zero Tenacity | W   | 0.221      | 0.384        | 0.021 (0.002)    | 0.646 (0.055)    | 0 (0.000) |     4.62 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     2611 | 2024-11-09 | Metizport     | L   | 0.207      | -            | -                | -                | -         |    -1.08 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     2633 | 2024-11-08 | Alliance      | W   | 0.201      | 0.432        | 0.010 (0.001)    | 0.512 (0.044)    | 1 (0.201) |     3.87 | isak, jocab, MisteM, r1nkle, REZ |
|            5 |     2918 | 2024-10-25 | Imperial      | L   | 0.107      | -            | -                | -                | -         |    -1.08 | isak, jocab, MisteM, r1nkle, REZ |
|            4 |     2946 | 2024-10-23 | Falcons       | L   | 0.095      | -            | -                | -                | -         |    -0.01 | isak, jocab, MisteM, r1nkle, REZ |
|            3 |     2948 | 2024-10-23 | Imperial      | W   | 0.093      | 0.477        | 0.074 (0.003)    | 0.749 (0.033)    | 0 (0.000) |     2.01 | isak, jocab, MisteM, r1nkle, REZ |
|            2 |     3093 | 2024-10-16 | JANO          | L   | 0.048      | -            | -                | -                | -         |    -0.66 | isak, jocab, MisteM, r1nkle, REZ |
|            1 |     3106 | 2024-10-16 | B8            | L   | 0.046      | -            | -                | -                | -         |    -0.30 | isak, jocab, MisteM, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,125.52)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.227 | $1,500.00      | $340.37         |
| 2024-11-09 |      0.207 | $11,635.00     | $2,414.13       |
| 2024-10-20 |      0.074 | $5,000.00      | $371.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
