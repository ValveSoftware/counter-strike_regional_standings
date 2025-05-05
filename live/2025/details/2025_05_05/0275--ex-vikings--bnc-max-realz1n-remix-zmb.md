### Roster Details<br />
Team Name: ex-Vikings<br />
Roster: bnc, max, realz1n, remix, zmb<br />
Global Rank: [275](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [82]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  472.6<br />
<br />
Final Rank Value (472.6) = Starting Rank Value (466.3) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 466.3
- 400 + ( ( 0.037 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 466.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2421 | 2025-01-09 | Solid             | L   | 0.427      | -            | -                | -                | -         |    -2.96 | bnc, max, realz1n, remix, zmb     |
|            6 |     2505 | 2024-12-20 | Patins da Ferrari | W   | 0.295      | 0.143        | 0.000 (0.000)    | 0.043 (0.002)    | 0 (0.000) |     4.82 | lukiz, max, realz1n, remix, zmb   |
|            5 |     2535 | 2024-12-18 | NITRO             | W   | 0.280      | 0.143        | 0.000 (0.000)    | 0.115 (0.005)    | 0 (0.000) |     5.99 | lukiz, max, realz1n, remix, zmb   |
|            4 |     2552 | 2024-12-16 | Bad News Chickens | L   | 0.268      | -            | -                | -                | -         |    -3.23 | lukiz, max, realz1n, remix, zmb   |
|            3 |     2614 | 2024-12-13 | Galorys Academy   | W   | 0.248      | 0.143        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     3.19 | lukiz, max, realz1n, remix, zmb   |
|            2 |     2943 | 2024-11-27 | NITRO             | L   | 0.141      | -            | -                | -                | -         |    -1.42 | lukiz, pancc, realz1n, remix, zmb |
|            1 |     3403 | 2024-11-07 | ODDIK             | L   | 0.008      | -            | -                | -                | -         |    -0.05 | lukiz, pancc, realz1n, remix, zmb |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
