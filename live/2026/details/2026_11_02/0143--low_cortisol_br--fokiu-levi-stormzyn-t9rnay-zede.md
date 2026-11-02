### Roster Details<br />
Team Name: Low Cortisol BR<br />
Roster: fokiu, levi, stormzyn, t9rnay, zede<br />
Global Rank: [143](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_11_02.md)<br />
Regional Rank: [26]( ../../standings_americas_2026_11_02.md)<br />
<br />
Final Rank Value:  875.5<br />
<br />
Final Rank Value (875.5) = Starting Rank Value (829.6) + Head To Head Adjustments (45.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 829.6
- 400 + ( ( 0.229 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 829.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       13 | 2026-11-01 | NAOCOPULAS      | W   | 1.000      | 0.396        | 0.007 (0.003)    | 0.318 (0.126)    | 1 (1.000) |    15.11 | fokiu, levi, stormzyn, t9rnay, zede |
|            4 |       23 | 2026-10-31 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -1.33 | fokiu, levi, stormzyn, t9rnay, zede |
|            3 |       38 | 2026-10-31 | Turma do Pagode | W   | 1.000      | 0.396        | 0.031 (0.012)    | 0.302 (0.120)    | 1 (1.000) |    22.00 | fokiu, levi, stormzyn, t9rnay, zede |
|            2 |       77 | 2026-10-30 | ALKA            | W   | 1.000      | 0.396        | 0.006 (0.003)    | 0.343 (0.136)    | 1 (1.000) |    11.03 | fokiu, levi, stormzyn, t9rnay, zede |
|            1 |      103 | 2026-10-29 | DENDELE         | L   | 1.000      | -            | -                | -                | -         |    -0.95 | fokiu, levi, stormzyn, t9rnay, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,500.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-11-01 |      1.000 | $3,500.00      | $3,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
