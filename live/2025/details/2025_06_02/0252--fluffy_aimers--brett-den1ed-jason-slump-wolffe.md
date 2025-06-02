### Roster Details<br />
Team Name: FLUFFY AIMERS<br />
Roster: brett, den1ed, jason, slump, Wolffe<br />
Global Rank: [252](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [81]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  481.5<br />
<br />
Final Rank Value (481.5) = Starting Rank Value (480.9) + Head To Head Adjustments (0.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.008[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.9
- 400 + ( ( 0.044 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 480.9


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
|            6 |     3677 | 2024-12-14 | Party Astronauts   | L   | 0.074      | -            | -                | -                | -         |    -0.58 | brett, den1ed, jason, slump, Wolffe |
|            5 |     3779 | 2024-12-08 | BLUEJAYS           | L   | 0.032      | -            | -                | -                | -         |    -0.04 | brett, jason, nooz, slump, Wolffe   |
|            4 |     3793 | 2024-12-07 | Party Astronauts   | W   | 0.028      | 0.384        | 0.007 (0.000)    | 0.108 (0.001)    | 1 (0.028) |     0.66 | brett, jason, nooz, slump, Wolffe   |
|            3 |     3800 | 2024-12-07 | Bad News Capybaras | W   | 0.027      | 0.384        | 0.004 (0.000)    | 0.275 (0.003)    | 1 (0.027) |     0.66 | brett, jason, nooz, slump, Wolffe   |
|            2 |     3814 | 2024-12-07 | What’s for dinner  | W   | 0.025      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.025) |     0.30 | brett, jason, nooz, slump, Wolffe   |
|            1 |     3827 | 2024-12-06 | ROOMBA PEEK        | L   | 0.021      | -            | -                | -                | -         |    -0.41 | brett, jason, nooz, slump, Wolffe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
