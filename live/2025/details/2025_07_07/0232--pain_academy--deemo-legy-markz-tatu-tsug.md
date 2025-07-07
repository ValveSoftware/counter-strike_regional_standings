### Roster Details<br />
Team Name: paiN Academy<br />
Roster: deemO, legy, Markz, Tatu, tsug<br />
Global Rank: [232](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_07_07.md)<br />
Regional Rank: [73]( ../../standings_americas_2025_07_07.md)<br />
<br />
Final Rank Value:  515.4<br />
<br />
Final Rank Value (515.4) = Starting Rank Value (498.4) + Head To Head Adjustments (17.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 498.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2581 | 2025-03-09 | Sharks      | L   | 0.400      | -            | -                | -                | -         |    -0.85 | deemO, legy, Markz, Tatu, tsug    |
|            6 |     2767 | 2025-03-06 | Players     | W   | 0.381      | 0.371        | 0.001 (0.000)    | 0.228 (0.032)    | 0 (0.000) |     8.41 | deemO, legy, Markz, Tatu, tsug    |
|            5 |     2807 | 2025-03-05 | Yawara      | W   | 0.375      | 0.371        | 0.003 (0.000)    | 0.221 (0.031)    | 0 (0.000) |     8.81 | deemO, legy, Markz, Tatu, tsug    |
|            4 |     2858 | 2025-03-03 | LP          | L   | 0.361      | -            | -                | -                | -         |    -2.50 | deemO, legy, Markz, Tatu, tsug    |
|            3 |     2927 | 2025-02-28 | GameHunters | W   | 0.342      | 0.371        | 0.005 (0.001)    | 0.088 (0.011)    | 0 (0.000) |     7.23 | deemO, legy, Markz, Tatu, tsug    |
|            2 |     2941 | 2025-02-27 | ShindeN     | L   | 0.336      | -            | -                | -                | -         |    -2.76 | deemO, legy, Markz, Tatu, tsug    |
|            1 |     3570 | 2025-02-07 | KRÜ         | L   | 0.202      | -            | -                | -                | -         |    -1.35 | deemO, legy, Markz, PremiuM, Tatu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
