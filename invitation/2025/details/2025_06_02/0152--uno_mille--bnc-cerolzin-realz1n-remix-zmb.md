### Roster Details<br />
Team Name: UNO MILLE<br />
Roster: bnc, cerolzin, realz1n, remix, zmb<br />
Global Rank: [152](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [45]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  669.3<br />
<br />
Final Rank Value (669.3) = Starting Rank Value (657.7) + Head To Head Adjustments (11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.255[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.7
- 400 + ( ( 0.140 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 657.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     3267 | 2025-01-28 | Fluxo             | L   | 0.373      | -            | -                | -                | -         |    -2.67 | bnc, cerolzin, realz1n, remix, zmb |
|           12 |     3271 | 2025-01-28 | Fluxo             | W   | 0.373      | 0.450        | 0.061 (0.010)    | 0.600 (0.101)    | 0 (0.000) |     9.24 | bnc, cerolzin, realz1n, remix, zmb |
|           11 |     3344 | 2025-01-24 | Solid             | L   | 0.347      | -            | -                | -                | -         |    -3.01 | bnc, cerolzin, realz1n, remix, zmb |
|           10 |     3347 | 2025-01-24 | Solid             | L   | 0.346      | -            | -                | -                | -         |    -3.09 | bnc, cerolzin, realz1n, remix, zmb |
|            9 |     3420 | 2025-01-22 | KRÜ               | L   | 0.333      | -            | -                | -                | -         |    -4.87 | bnc, cerolzin, realz1n, remix, zmb |
|            8 |     3421 | 2025-01-22 | KRÜ               | W   | 0.333      | 0.450        | 0.003 (0.001)    | 0.294 (0.044)    | 0 (0.000) |     5.73 | bnc, cerolzin, realz1n, remix, zmb |
|            7 |     3452 | 2025-01-21 | RED Canids        | W   | 0.327      | 0.450        | 0.004 (0.001)    | 0.133 (0.020)    | 0 (0.000) |     5.86 | bnc, cerolzin, realz1n, remix, zmb |
|            6 |     3455 | 2025-01-21 | RED Canids        | W   | 0.326      | 0.450        | 0.004 (0.001)    | 0.133 (0.019)    | 0 (0.000) |     6.02 | bnc, cerolzin, realz1n, remix, zmb |
|            5 |     3512 | 2025-01-09 | Solid             | L   | 0.245      | -            | -                | -                | -         |    -1.94 | bnc, max, realz1n, remix, zmb      |
|            4 |     3596 | 2024-12-20 | Patins da Ferrari | W   | 0.112      | 0.143        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.93 | lukiz, max, realz1n, remix, zmb    |
|            3 |     3626 | 2024-12-18 | NITRO             | W   | 0.097      | 0.143        | 0.000 (0.000)    | 0.044 (0.001)    | 0 (0.000) |     0.86 | lukiz, max, realz1n, remix, zmb    |
|            2 |     3643 | 2024-12-16 | Bad News Chickens | L   | 0.086      | -            | -                | -                | -         |    -1.97 | lukiz, max, realz1n, remix, zmb    |
|            1 |     3705 | 2024-12-13 | Galorys Academy   | W   | 0.066      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.54 | lukiz, max, realz1n, remix, zmb    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,500.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      1.000 | $1,500.00      | $1,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
