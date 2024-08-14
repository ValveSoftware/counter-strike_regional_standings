### Roster Details<br />
Team Name: Meteor<br />
Roster: dosikzz, for2na, ResoLuxe, rinn, WANGJ<br />
Global Rank: [137](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
<br />
Final Rank Value:  750.1<br />
<br />
Final Rank Value (750.1) = Starting Rank Value (744.5) + Head To Head Adjustments (5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.347[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.085[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 744.5
- 400 + ( ( 0.175 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 744.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |       39 | 2024-08-13 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -10.03 | dosikzz, for2na, ResoLuxe, rinn, WANGJ     |
|            9 |      191 | 2024-08-08 | INFINITE          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.180 (0.026)    | 0 (0.000) |     9.47 | dosikzz, for2na, ResoLuxe, rinn, WANGJ     |
|            8 |      306 | 2024-08-05 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -7.60 | dosikzz, for2na, ResoLuxe, rinn, WANGJ     |
|            7 |      450 | 2024-08-01 | FAVBET            | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.413 (0.059)    | 0 (0.000) |    19.69 | dosikzz, for2na, ResoLuxe, rinn, WANGJ     |
|            6 |      737 | 2024-07-24 | Permitta          | W   | 1.000      | 0.143        | 0.036 (0.005)    | 0.957 (0.137)    | 0 (0.000) |    23.47 | dosikzz, for2na, ResoLuxe, rinn, WANGJ     |
|            5 |      814 | 2024-07-21 | ALLINNERS         | L   | 1.000      | -            | -                | -                | -         |   -14.76 | dosikzz, F0R3VER, for2na, OxygeN, rinn     |
|            4 |     1076 | 2024-07-16 | Sampi             | L   | 1.000      | -            | -                | -                | -         |    -9.67 | dosikzz, for2na, ResoLuxe, rinn, WANGJ     |
|            3 |     1579 | 2024-06-09 | TÓR               | L   | 0.758      | -            | -                | -                | -         |    -7.68 | dosikzz, dukefissura, for2na, OxygeN, rinn |
|            2 |     1591 | 2024-06-09 | ALLINNERS         | W   | 0.757      | 0.350        | 0.008 (0.002)    | 0.029 (0.008)    | 1 (0.757) |    10.46 | dosikzz, dukefissura, for2na, OxygeN, rinn |
|            1 |     1627 | 2024-06-08 | TÓR               | L   | 0.752      | -            | -                | -                | -         |    -7.78 | dosikzz, dukefissura, for2na, OxygeN, rinn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,237.49)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $1,586.00      | $1,586.00       |
| 2024-06-09 |      0.758 | $3,500.00      | $2,651.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
