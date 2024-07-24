### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [163](../standings_global.md)<br />
Regional Rank: [103]( ../standings_europe.md)<br />
Final Rank Value:  678.9<br />
<br />
Final Rank Value (678.9) = Starting Rank Value (690.1) + Head To Head Adjustments (-11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.1
- 400 + ( ( 0.143 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 690.1


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
|           15 |     1182 | 2024-06-02 | FAVBET            | L   | 0.852      | -            | -                | -                | -         |    -9.20 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           14 |     1284 | 2024-05-29 | Zero Tenacity     | L   | 0.827      | -            | -                | -                | -         |    -2.23 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |     2119 | 2024-04-27 | Sashi             | L   | 0.613      | -            | -                | -                | -         |    -1.14 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     2292 | 2024-04-20 | Sangal            | L   | 0.564      | -            | -                | -                | -         |    -1.72 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     2325 | 2024-04-19 | NOM               | W   | 0.560      | 0.143        | 0.000 (0.000)    | 0.094 (0.007)    | 0 (0.000) |     5.39 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     2425 | 2024-04-17 | RUBY              | L   | 0.544      | -            | -                | -                | -         |    -3.15 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     2434 | 2024-04-17 | MOUZ NXT          | L   | 0.544      | -            | -                | -                | -         |    -1.96 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     2515 | 2024-04-12 | Zero Tenacity     | W   | 0.511      | 0.371        | 0.173 (0.033)    | 1.000 (0.189)    | 0 (0.000) |    14.30 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     2679 | 2024-04-08 | Permitta          | L   | 0.484      | -            | -                | -                | -         |    -2.83 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     2714 | 2024-04-06 | Johnny Speeds     | L   | 0.472      | -            | -                | -                | -         |    -0.40 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     2779 | 2024-04-04 | Gaimin Gladiators | L   | 0.458      | -            | -                | -                | -         |    -1.49 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     3246 | 2024-03-12 | kONO              | L   | 0.306      | -            | -                | -                | -         |    -3.12 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     3336 | 2024-03-08 | INGLORIOUS        | W   | 0.278      | 0.143        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     2.83 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     3446 | 2024-03-04 | Endpoint          | L   | 0.252      | -            | -                | -                | -         |    -6.05 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     3531 | 2024-02-29 | Sashi             | L   | 0.225      | -            | -                | -                | -         |    -0.49 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($487.86)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
