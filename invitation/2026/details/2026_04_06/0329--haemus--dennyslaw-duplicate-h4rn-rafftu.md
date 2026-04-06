### Roster Details<br />
Team Name: Haemus<br />
Roster: dennyslaw, Duplicate, h4rn, rafftu<br />
Global Rank: [329](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [197]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  489.5<br />
<br />
Final Rank Value (489.5) = Starting Rank Value (486.0) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.147[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.028[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.0
- 400 + ( ( 0.044 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 486.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3868 | 2025-12-17 | HYPERSPIRIT | L   | 0.467      | -            | -                | -                | -         |    -1.15 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            4 |     3881 | 2025-12-17 | The Huns    | L   | 0.465      | -            | -                | -                | -         |    -0.25 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            3 |     4445 | 2025-11-20 | Acend       | L   | 0.288      | -            | -                | -                | -         |    -0.10 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |
|            2 |     4460 | 2025-11-20 | UNiTY       | L   | 0.286      | -            | -                | -                | -         |    -0.94 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |
|            1 |     4477 | 2025-11-20 | Phantom     | W   | 0.285      | 0.339        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.285) |     6.00 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
