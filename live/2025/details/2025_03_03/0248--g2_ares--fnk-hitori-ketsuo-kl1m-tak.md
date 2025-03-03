### Roster Details<br />
Team Name: G2 Ares<br />
Roster: fNk, hitori, ketsuo, kl1m, tAk<br />
Global Rank: [248](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [141]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  552.4<br />
<br />
Final Rank Value (552.4) = Starting Rank Value (522.6) + Head To Head Adjustments (29.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 522.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1468 | 2024-11-16 | FLuffy Gangsters | L   | 0.488      | -            | -                | -                | -         |    -5.06 | fNk, hitori, ketsuo, kl1m, tAk |
|            9 |     1561 | 2024-11-13 | WOPA             | W   | 0.470      | 0.143        | 0.028 (0.002)    | 0.517 (0.035)    | 0 (0.000) |    11.73 | fNk, hitori, ketsuo, kl1m, tAk |
|            8 |     1574 | 2024-11-13 | Daystar          | W   | 0.466      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     8.67 | fNk, hitori, ketsuo, kl1m, tAk |
|            7 |     2388 | 2024-10-06 | TSM              | L   | 0.213      | -            | -                | -                | -         |    -1.68 | fNk, hitori, kl1m, tAk, xezr   |
|            6 |     2475 | 2024-10-04 | Permitta         | W   | 0.198      | 0.435        | 0.027 (0.002)    | 0.364 (0.031)    | 0 (0.000) |     5.54 | fNk, hitori, kl1m, tAk, xezr   |
|            5 |     2549 | 2024-10-02 | CYBERSHOKE       | L   | 0.186      | -            | -                | -                | -         |    -0.98 | fNk, hitori, kl1m, tAk, xezr   |
|            4 |     2593 | 2024-10-01 | Metizport        | L   | 0.181      | -            | -                | -                | -         |    -0.29 | fNk, hitori, kl1m, tAk, xezr   |
|            3 |     2646 | 2024-09-29 | CPH Wolves       | W   | 0.167      | 0.143        | 0.001 (0.000)    | 0.087 (0.002)    | 0 (0.000) |     3.57 | fNk, hitori, kl1m, tAk, xezr   |
|            2 |     2728 | 2024-09-27 | Nexus            | W   | 0.154      | 0.143        | 0.176 (0.004)    | 0.556 (0.012)    | 0 (0.000) |     4.68 | fNk, hitori, kl1m, tAk, xezr   |
|            1 |     2784 | 2024-09-26 | EYEBALLERS       | W   | 0.146      | 0.143        | 0.019 (0.000)    | 0.362 (0.008)    | 0 (0.000) |     3.64 | fNk, hitori, kl1m, tAk, xezr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
