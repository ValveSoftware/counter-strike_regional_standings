### Roster Details<br />
Team Name: InControl<br />
Roster: DYLAN, FIEND, jsfeltner, mason, TyRa<br />
Global Rank: [205](../../standings_global_2024_09_18.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_09_18.md)<br />
Regional Rank: [55]( ../../standings_americas_2024_09_18.md)<br />
<br />
Final Rank Value:  552.9<br />
<br />
Final Rank Value (552.9) = Starting Rank Value (528.2) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.2
- 400 + ( ( 0.065 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 528.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       44 | 2024-09-16 | Mythic           | L   | 1.000      | -            | -                | -                | -         |    -8.68 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           11 |      197 | 2024-09-11 | Akimbo           | L   | 1.000      | -            | -                | -                | -         |    -7.69 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|           10 |      254 | 2024-09-09 | Final Form       | W   | 1.000      | 0.372        | 0.005 (0.002)    | 0.162 (0.060)    | 0 (0.000) |    20.65 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            9 |      294 | 2024-09-07 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -1.55 | Beast, jsfeltner, mason, Pugg, TyRa  |
|            8 |      998 | 2024-08-19 | Party Astronauts | L   | 1.000      | -            | -                | -                | -         |    -2.74 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            7 |     1095 | 2024-08-15 | NRG              | L   | 0.976      | -            | -                | -                | -         |    -2.12 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            6 |     1154 | 2024-08-13 | M80              | L   | 0.962      | -            | -                | -                | -         |    -0.37 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            5 |     1235 | 2024-08-11 | Homyno           | W   | 0.950      | 0.371        | 0.007 (0.003)    | 0.164 (0.058)    | 0 (0.000) |    18.39 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            4 |     1282 | 2024-08-09 | LAG              | W   | 0.936      | 0.371        | 0.006 (0.002)    | 0.356 (0.123)    | 0 (0.000) |    22.66 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            3 |     1427 | 2024-08-05 | Aether           | W   | 0.910      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.29 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            2 |     1719 | 2024-07-28 | Vibe             | L   | 0.857      | -            | -                | -                | -         |   -17.88 | DYLAN, FIEND, jsfeltner, mason, TyRa |
|            1 |     1841 | 2024-07-24 | Take Flyte       | L   | 0.830      | -            | -                | -                | -         |    -5.24 | DYLAN, FIEND, jsfeltner, mason, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,303.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
