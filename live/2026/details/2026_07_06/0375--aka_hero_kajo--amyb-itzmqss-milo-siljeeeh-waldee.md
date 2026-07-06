### Roster Details<br />
Team Name: AKA HERO KAJO<br />
Roster: amyb, ItzMqss, miLo, Siljeeeh, Waldee<br />
Global Rank: [375](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [233]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  401.4<br />
<br />
Final Rank Value (401.4) = Starting Rank Value (401.4) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 401.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2838 | 2026-04-01 | Clutchain fe | L   | 0.560      | -            | -                | -                | -         |    -3.14 | amyb, ItzMqss, miLo, Siljeeeh, Waldee   |
|            6 |     2901 | 2026-03-31 | rottweilers  | W   | 0.554      | 0.384        | 0.000 (0.000)    | 0.135 (0.029)    | 0 (0.000) |    13.53 | amyb, ItzMqss, miLo, Siljeeeh, Waldee   |
|            5 |     3058 | 2026-03-29 | yngods       | L   | 0.541      | -            | -                | -                | -         |    -2.88 | amyb, ItzMqss, miLo, Siljeeeh, Waldee   |
|            4 |     3275 | 2026-03-26 | ex-MANA      | L   | 0.518      | -            | -                | -                | -         |    -1.30 | amyb, ItzMqss, Siljeeeh, VilleS, Waldee |
|            3 |     3328 | 2026-03-25 | Lilmix       | L   | 0.512      | -            | -                | -                | -         |    -2.52 | amyb, ItzMqss, Siljeeeh, VilleS, Waldee |
|            2 |     3696 | 2026-03-18 | ex-MANA      | L   | 0.467      | -            | -                | -                | -         |    -1.22 | Kossu72, miLo, Siljeeeh, spargo, Waldee |
|            1 |     3789 | 2026-03-16 | Rune Eaters  | L   | 0.453      | -            | -                | -                | -         |    -2.41 | Kossu72, miLo, Siljeeeh, spargo, Waldee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
