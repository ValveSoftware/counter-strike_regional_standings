### Roster Details<br />
Team Name: QWENTRY<br />
Roster: abiraju, anttzz, eightz999, Muk0s, slaxejezzz<br />
Global Rank: [249](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [144]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  532.0<br />
<br />
Final Rank Value (532.0) = Starting Rank Value (516.2) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.2
- 400 + ( ( 0.061 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 516.2


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
|            9 |      242 | 2025-11-20 | CSDIILIT   | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.142 (0.020)    | 0 (0.000) |    20.45 | anttzz, eightz999, PsychoDoctor, slaxejezzz, Wadeshot |
|            8 |      816 | 2025-11-01 | Lazer Cats | L   | 0.998      | -            | -                | -                | -         |   -15.44 | anttzz, eightz999, PsychoDoctor, slaxejezzz, Wadeshot |
|            7 |     3616 | 2025-08-08 | VP.Prodigy | L   | 0.434      | -            | -                | -                | -         |    -1.69 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            6 |     3999 | 2025-07-17 | RUBY       | L   | 0.286      | -            | -                | -                | -         |    -0.61 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            5 |     4066 | 2025-07-14 | Alliance   | L   | 0.266      | -            | -                | -                | -         |    -0.07 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            4 |     4180 | 2025-07-09 | AaB        | W   | 0.234      | 0.525        | 0.003 (0.000)    | 0.367 (0.045)    | 0 (0.000) |     6.70 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            3 |     4193 | 2025-07-09 | GUN5       | W   | 0.233      | 0.525        | 0.023 (0.003)    | 0.967 (0.118)    | 0 (0.000) |     7.19 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            2 |     4274 | 2025-06-30 | GUN5       | L   | 0.172      | -            | -                | -                | -         |    -0.11 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |
|            1 |     4317 | 2025-06-23 | Fire Flux  | L   | 0.126      | -            | -                | -                | -         |    -0.61 | abiraju, anttzz, eightz999, Muk0s, slaxejezzz         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
