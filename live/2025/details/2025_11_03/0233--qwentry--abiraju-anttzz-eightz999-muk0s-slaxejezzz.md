### Roster Details<br />
Team Name: QWENTRY<br />
Roster: abiraju, anttzz, eightz999, Muk0s, slaxejezzz<br />
Global Rank: [233](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [132]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  521.1<br />
<br />
Final Rank Value (521.1) = Starting Rank Value (520.6) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 520.6
- 400 + ( ( 0.064 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 520.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       32 | 2025-11-01 | Lazer Cats | L   | 1.000      | -            | -                | -                | -         |   -16.02 | anttzz, eightz999, PsychoDoctor, slaxejezzz, Wadeshot |
|            7 |     2595 | 2025-08-08 | VP.Prodigy | L   | 0.621      | -            | -                | -                | -         |    -2.14 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            6 |     2978 | 2025-07-17 | RUBY       | L   | 0.472      | -            | -                | -                | -         |    -1.27 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            5 |     3045 | 2025-07-14 | Alliance   | L   | 0.453      | -            | -                | -                | -         |    -0.66 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            4 |     3159 | 2025-07-09 | AaB        | W   | 0.421      | 0.525        | 0.002 (0.000)    | 0.314 (0.069)    | 0 (0.000) |    11.64 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            3 |     3172 | 2025-07-09 | GUN5       | W   | 0.420      | 0.525        | 0.020 (0.004)    | 0.843 (0.186)    | 0 (0.000) |    12.02 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            2 |     3253 | 2025-06-30 | GUN5       | L   | 0.359      | -            | -                | -                | -         |    -1.01 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            1 |     3296 | 2025-06-23 | Fire Flux  | L   | 0.313      | -            | -                | -                | -         |    -2.08 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
