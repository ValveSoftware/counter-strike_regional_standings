### Roster Details<br />
Team Name: Big W<br />
Roster: Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN<br />
Global Rank: [201](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_05_05.md)<br />
Regional Rank: [32]( ../../standings_asia_2025_05_05.md)<br />
<br />
Final Rank Value:  588.4<br />
<br />
Final Rank Value (588.4) = Starting Rank Value (604.7) + Head To Head Adjustments (-16.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.7
- 400 + ( ( 0.113 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 604.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1576 | 2025-02-28 | Victores Sumus | L   | 0.759      | -            | -                | -                | -         |    -8.17 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            5 |     1604 | 2025-02-27 | Flshbck        | L   | 0.751      | -            | -                | -                | -         |   -10.59 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            4 |     2607 | 2024-12-14 | Gods Reign     | L   | 0.252      | -            | -                | -                | -         |    -1.84 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            3 |     2609 | 2024-12-14 | st4rboys       | W   | 0.251      | 0.262        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     3.67 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            2 |     3143 | 2024-11-17 | Flshbck        | L   | 0.072      | -            | -                | -                | -         |    -0.98 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |
|            1 |     3169 | 2024-11-16 | Gods Reign     | W   | 0.065      | 0.289        | 0.011 (0.000)    | 0.438 (0.008)    | 1 (0.065) |     1.59 | Crazy_Gamer, CycloneF, hattygOD, N1kace, SpawN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($652.53)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-01 |      0.765 | $576.00        | $440.69         |
| 2024-12-14 |      0.252 | $500.00        | $125.78         |
| 2024-11-17 |      0.072 | $1,200.00      | $86.06          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
