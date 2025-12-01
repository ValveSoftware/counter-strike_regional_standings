### Roster Details<br />
Team Name: GLORE<br />
Roster: DEPRESHN, HENU, M1key, neptun<br />
Global Rank: [283](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [155]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  413.8<br />
<br />
Final Rank Value (413.8) = Starting Rank Value (400.4) + Head To Head Adjustments (13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.4
- 400 + ( ( 0.000 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 400.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1465 | 2025-10-10 | BRUTE        | L   | 0.854      | -            | -                | -                | -         |    -4.12 | DEPRESHN, HENU, M1key, neptun, Topa  |
|            6 |     1520 | 2025-10-09 | ECLOT        | L   | 0.847      | -            | -                | -                | -         |    -0.43 | DEPRESHN, HENU, M1key, neptun, Topa  |
|            5 |     2006 | 2025-09-28 | Zennox       | W   | 0.774      | 0.334        | 0.000 (0.000)    | 0.029 (0.008)    | 0 (0.000) |    12.03 | DEPRESHN, HENU, M1key, neptun, STYKO |
|            4 |     2017 | 2025-09-28 | SINNERS      | L   | 0.773      | -            | -                | -                | -         |    -0.37 | DEPRESHN, HENU, M1key, neptun, STYKO |
|            3 |     2170 | 2025-09-25 | 1DayHeroes   | W   | 0.753      | 0.334        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.73 | DEPRESHN, HENU, M1key, neptun, STYKO |
|            2 |     2179 | 2025-09-25 | ComeBack     | L   | 0.752      | -            | -                | -                | -         |    -4.35 | DEPRESHN, HENU, Jelo, M1key, Sm1llee |
|            1 |     2199 | 2025-09-24 | Eternal Fire | L   | 0.747      | -            | -                | -                | -         |    -1.04 | DEPRESHN, HENU, Jelo, M1key, Sm1llee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
