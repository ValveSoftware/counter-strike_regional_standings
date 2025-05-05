### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [284](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_05_05.md)<br />
Regional Rank: [89]( ../../standings_americas_2025_05_05.md)<br />
<br />
Final Rank Value:  436.1<br />
<br />
Final Rank Value (436.1) = Starting Rank Value (431.9) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.067[<sup>2</sup>](#table1)

The average of these factors is 0.018<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 431.9
- 400 + ( ( 0.018 - 0.000 ) / ( 0.882 - 0.000 ) ) * 1600 = 431.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2586 | 2024-12-14 | Party Astronauts   | L   | 0.256      | -            | -                | -                | -         |    -3.25 | brett, den1ed, jason, slump, Wolffe |
|            5 |     2688 | 2024-12-08 | BLUEJAYS           | L   | 0.214      | -            | -                | -                | -         |    -0.25 | brett, jason, nooz, slump, Wolffe   |
|            4 |     2702 | 2024-12-07 | Party Astronauts   | W   | 0.210      | 0.384        | 0.000 (0.000)    | 0.164 (0.013)    | 1 (0.210) |     4.01 | brett, jason, nooz, slump, Wolffe   |
|            3 |     2709 | 2024-12-07 | Bad News Capybaras | W   | 0.209      | 0.384        | 0.000 (0.000)    | 0.279 (0.022)    | 1 (0.209) |     4.08 | brett, jason, nooz, slump, Wolffe   |
|            2 |     2723 | 2024-12-07 | What’s for dinner  | W   | 0.207      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.207) |     3.00 | brett, jason, nooz, slump, Wolffe   |
|            1 |     2736 | 2024-12-06 | ROOMBA PEEK        | L   | 0.203      | -            | -                | -                | -         |    -3.40 | brett, jason, nooz, slump, Wolffe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($360,998.53)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
