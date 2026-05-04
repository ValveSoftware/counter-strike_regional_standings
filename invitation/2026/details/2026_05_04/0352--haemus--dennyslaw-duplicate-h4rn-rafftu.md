### Roster Details<br />
Team Name: Haemus<br />
Roster: dennyslaw, Duplicate, h4rn, rafftu<br />
Global Rank: [352](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [210]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  405.3<br />
<br />
Final Rank Value (405.3) = Starting Rank Value (404.6) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 404.6
- 400 + ( ( 0.002 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 404.6


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
|            5 |     4965 | 2025-12-17 | HYPERSPIRIT | L   | 0.280      | -            | -                | -                | -         |    -0.30 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            4 |     4978 | 2025-12-17 | The Huns    | L   | 0.278      | -            | -                | -                | -         |    -0.13 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            3 |     5542 | 2025-11-20 | Acend       | L   | 0.101      | -            | -                | -                | -         |    -0.04 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |
|            2 |     5557 | 2025-11-20 | UNiTY       | L   | 0.099      | -            | -                | -                | -         |    -0.33 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |
|            1 |     5574 | 2025-11-20 | Phantom     | W   | 0.098      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.098) |     1.52 | dennyslaw, Duplicate, h4rn, hazza, rafftu   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
