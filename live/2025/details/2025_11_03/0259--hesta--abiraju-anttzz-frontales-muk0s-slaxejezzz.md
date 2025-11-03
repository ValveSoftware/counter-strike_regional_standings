### Roster Details<br />
Team Name: Hesta<br />
Roster: abiraju, anttzz, frontales, Muk0s, slaxejezzz<br />
Global Rank: [259](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [141]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  400.1<br />
<br />
Final Rank Value (400.1) = Starting Rank Value (400.0) + Head To Head Adjustments (0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3774 | 2025-05-23 | Y5           | L   | 0.106      | -            | -                | -                | -         |    -0.54 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            4 |     3818 | 2025-05-21 | inputprayers | W   | 0.093      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.46 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            3 |     3848 | 2025-05-20 | Y5           | L   | 0.086      | -            | -                | -                | -         |    -0.43 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            2 |     3868 | 2025-05-19 | VRSoholics   | L   | 0.080      | -            | -                | -                | -         |    -0.34 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |
|            1 |     3974 | 2025-05-14 | Oramond      | L   | 0.047      | -            | -                | -                | -         |    -0.09 | abiraju, anttzz, frontales, Muk0s, slaxejezzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
