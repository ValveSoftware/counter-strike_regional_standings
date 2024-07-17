### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  700.5<br />
<br />
Final Rank Value (700.5) = Starting Rank Value (711.4) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.4
- 400 + ( ( 0.145 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 711.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      894 | 2024-06-02 | FAVBET            | L   | 0.899      | -            | -                | -                | -         |    -9.23 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           14 |      996 | 2024-05-29 | Zero Tenacity     | L   | 0.874      | -            | -                | -                | -         |    -2.31 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |     1831 | 2024-04-27 | Sashi             | L   | 0.660      | -            | -                | -                | -         |    -1.26 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     2004 | 2024-04-20 | Sangal            | L   | 0.611      | -            | -                | -                | -         |    -1.61 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     2037 | 2024-04-19 | NOM               | W   | 0.607      | 0.143        | 0.000 (0.000)    | 0.103 (0.009)    | 0 (0.000) |     5.62 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     2137 | 2024-04-17 | RUBY              | L   | 0.592      | -            | -                | -                | -         |    -3.04 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     2146 | 2024-04-17 | MOUZ NXT          | L   | 0.591      | -            | -                | -                | -         |    -1.94 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     2227 | 2024-04-12 | Zero Tenacity     | W   | 0.558      | 0.371        | 0.154 (0.032)    | 1.000 (0.207)    | 0 (0.000) |    15.46 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     2391 | 2024-04-08 | Permitta          | L   | 0.531      | -            | -                | -                | -         |    -2.94 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     2426 | 2024-04-06 | Johnny Speeds     | L   | 0.519      | -            | -                | -                | -         |    -0.34 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     2491 | 2024-04-04 | Gaimin Gladiators | L   | 0.505      | -            | -                | -                | -         |    -1.21 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     2958 | 2024-03-12 | kONO              | L   | 0.353      | -            | -                | -                | -         |    -3.36 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     3048 | 2024-03-08 | INGLORIOUS        | W   | 0.325      | 0.143        | 0.000 (0.000)    | 0.026 (0.001)    | 0 (0.000) |     3.23 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     3158 | 2024-03-04 | Endpoint          | L   | 0.300      | -            | -                | -                | -         |    -7.30 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     3243 | 2024-02-29 | Sashi             | L   | 0.272      | -            | -                | -                | -         |    -0.72 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($525.41)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
