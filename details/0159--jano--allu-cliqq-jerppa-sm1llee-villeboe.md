### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [159](../standings_global.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
Final Rank Value:  691.5<br />
<br />
Final Rank Value (691.5) = Starting Rank Value (705.2) + Head To Head Adjustments (-13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.2
- 400 + ( ( 0.150 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 705.2


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
|           15 |      595 | 2024-06-02 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -10.17 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           14 |      698 | 2024-05-29 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -2.40 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |     1533 | 2024-04-27 | Sashi             | L   | 0.856      | -            | -                | -                | -         |    -1.34 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     1706 | 2024-04-20 | Sangal            | L   | 0.807      | -            | -                | -                | -         |    -2.25 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     1739 | 2024-04-19 | NOM               | W   | 0.802      | 0.143        | 0.000 (0.000)    | 0.116 (0.013)    | 0 (0.000) |     7.86 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     1839 | 2024-04-17 | RUBY              | L   | 0.787      | -            | -                | -                | -         |    -4.40 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     1848 | 2024-04-17 | MOUZ NXT          | L   | 0.787      | -            | -                | -                | -         |    -2.54 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     1929 | 2024-04-12 | Zero Tenacity     | W   | 0.753      | 0.371        | 0.153 (0.043)    | 1.000 (0.279)    | 0 (0.000) |    20.65 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     2093 | 2024-04-08 | Permitta          | L   | 0.727      | -            | -                | -                | -         |    -3.86 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     2128 | 2024-04-06 | Johnny Speeds     | L   | 0.715      | -            | -                | -                | -         |    -0.83 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     2193 | 2024-04-04 | Gaimin Gladiators | L   | 0.700      | -            | -                | -                | -         |    -1.00 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     2661 | 2024-03-12 | kONO              | L   | 0.548      | -            | -                | -                | -         |    -5.62 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     2751 | 2024-03-08 | INGLORIOUS        | W   | 0.521      | 0.143        | 0.000 (0.000)    | 0.036 (0.003)    | 0 (0.000) |     5.52 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     2861 | 2024-03-04 | Endpoint          | L   | 0.495      | -            | -                | -                | -         |   -11.92 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     2946 | 2024-02-29 | Sashi             | L   | 0.467      | -            | -                | -                | -         |    -1.32 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($680.66)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
