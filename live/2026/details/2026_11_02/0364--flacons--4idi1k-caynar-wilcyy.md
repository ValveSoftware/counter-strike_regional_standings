### Roster Details<br />
Team Name: flacons<br />
Roster: 4idi1k, caynar, wilcyy<br />
Global Rank: [364](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [238]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  414.9<br />
<br />
Final Rank Value (414.9) = Starting Rank Value (425.5) + Head To Head Adjustments (-10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.014<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 425.5
- 400 + ( ( 0.014 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 425.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      349 | 2026-10-21 | BlinkDagger | L   | 1.000      | -            | -                | -                | -         |   -14.43 | 4idi1k, caynar, platowa, sometimes, wilcyy |
|            4 |      365 | 2026-10-21 | UPGRADE     | L   | 1.000      | -            | -                | -                | -         |    -0.64 | 4idi1k, caynar, platowa, sometimes, wilcyy |
|            3 |     3868 | 2026-07-27 | CYBERSHOKE  | L   | 0.545      | -            | -                | -                | -         |    -0.81 | 4idi1k, caynar, Gozlar, kwaren, wilcyy     |
|            2 |     3872 | 2026-07-27 | Comanche    | W   | 0.545      | 0.417        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.545) |     7.90 | 4idi1k, caynar, Gozlar, kwaren, wilcyy     |
|            1 |     3874 | 2026-07-27 | Gothic      | L   | 0.544      | -            | -                | -                | -         |    -2.59 | 4idi1k, caynar, Gozlar, kwaren, wilcyy     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
