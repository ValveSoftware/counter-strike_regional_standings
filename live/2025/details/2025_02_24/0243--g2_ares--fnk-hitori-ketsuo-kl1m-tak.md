### Roster Details<br />
Team Name: G2 Ares<br />
Roster: fNk, hitori, ketsuo, kl1m, tAk<br />
Global Rank: [243](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [142]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  560.4<br />
<br />
Final Rank Value (560.4) = Starting Rank Value (525.0) + Head To Head Adjustments (35.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 525.0
- 400 + ( ( 0.066 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 525.0


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
|           10 |     1380 | 2024-11-16 | FLuffy Gangsters | L   | 0.533      | -            | -                | -                | -         |    -5.68 | fNk, hitori, ketsuo, kl1m, tAk |
|            9 |     1473 | 2024-11-13 | WOPA             | W   | 0.515      | 0.143        | 0.027 (0.002)    | 0.549 (0.040)    | 0 (0.000) |    12.77 | fNk, hitori, ketsuo, kl1m, tAk |
|            8 |     1486 | 2024-11-13 | Daystar          | W   | 0.511      | 0.143        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     9.61 | fNk, hitori, ketsuo, kl1m, tAk |
|            7 |     2300 | 2024-10-06 | TSM              | L   | 0.259      | -            | -                | -                | -         |    -1.99 | fNk, hitori, kl1m, tAk, xezr   |
|            6 |     2387 | 2024-10-04 | Permitta         | W   | 0.243      | 0.435        | 0.027 (0.003)    | 0.424 (0.045)    | 0 (0.000) |     6.83 | fNk, hitori, kl1m, tAk, xezr   |
|            5 |     2461 | 2024-10-02 | CYBERSHOKE       | L   | 0.231      | -            | -                | -                | -         |    -1.28 | fNk, hitori, kl1m, tAk, xezr   |
|            4 |     2505 | 2024-10-01 | Metizport        | L   | 0.226      | -            | -                | -                | -         |    -0.35 | fNk, hitori, kl1m, tAk, xezr   |
|            3 |     2558 | 2024-09-29 | CPH Wolves       | W   | 0.213      | 0.143        | 0.001 (0.000)    | 0.129 (0.004)    | 0 (0.000) |     4.66 | fNk, hitori, kl1m, tAk, xezr   |
|            2 |     2640 | 2024-09-27 | Nexus            | W   | 0.199      | 0.143        | 0.172 (0.005)    | 0.614 (0.017)    | 0 (0.000) |     6.06 | fNk, hitori, kl1m, tAk, xezr   |
|            1 |     2696 | 2024-09-26 | EYEBALLERS       | W   | 0.192      | 0.143        | 0.018 (0.000)    | 0.404 (0.011)    | 0 (0.000) |     4.73 | fNk, hitori, kl1m, tAk, xezr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
