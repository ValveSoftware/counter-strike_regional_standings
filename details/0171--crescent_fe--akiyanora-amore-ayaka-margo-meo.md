### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [171](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  659.0<br />
<br />
Final Rank Value (659.0) = Starting Rank Value (671.4) + Head To Head Adjustments (-12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.4
- 400 + ( ( 0.134 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 671.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      885 | 2024-06-08 | NOFEAR5           | L   | 0.894      | -            | -                | -                | -         |   -13.47 | akiyanora, amore, ayaka, Margo, meo |
|           13 |      909 | 2024-06-08 | ENCE Athena       | W   | 0.893      | 0.270        | 0.003 (0.001)    | 0.049 (0.012)    | 0 (0.000) |    12.68 | akiyanora, amore, ayaka, Margo, meo |
|           12 |     1347 | 2024-05-26 | NIP Impact        | W   | 0.807      | 0.250        | 0.007 (0.001)    | 0.216 (0.044)    | 0 (0.000) |    15.75 | akiyanora, amore, ayaka, Margo, meo |
|           11 |     1574 | 2024-05-18 | Imperial fe       | L   | 0.753      | -            | -                | -                | -         |    -1.88 | akiyanora, amore, ayaka, Margo, meo |
|           10 |     1957 | 2024-05-05 | Imperial fe       | L   | 0.666      | -            | -                | -                | -         |    -1.69 | akiyanora, amore, ayaka, Margo, meo |
|            9 |     2318 | 2024-04-19 | NAVI Javelins     | L   | 0.560      | -            | -                | -                | -         |    -4.13 | akiyanora, amore, ayaka, Margo, meo |
|            8 |     2530 | 2024-04-11 | Fearless Cheetahs | L   | 0.507      | -            | -                | -                | -         |    -6.78 | akiyanora, amore, ayaka, Margo, meo |
|            7 |     2584 | 2024-04-10 | Permitta W        | L   | 0.499      | -            | -                | -                | -         |   -11.32 | akiyanora, amore, ayaka, Margo, meo |
|            6 |     2667 | 2024-04-08 | Imperial fe       | L   | 0.486      | -            | -                | -                | -         |    -1.41 | akiyanora, amore, ayaka, Margo, meo |
|            5 |     2900 | 2024-03-28 | 1WIN Gang         | W   | 0.414      | 0.331        | 0.002 (0.000)    | 0.020 (0.003)    | 0 (0.000) |     6.34 | akiyanora, amore, ayaka, Margo, meo |
|            4 |     3053 | 2024-03-20 | Spirit fe         | L   | 0.361      | -            | -                | -                | -         |    -5.91 | akiyanora, amore, ayaka, Margo, meo |
|            3 |     3204 | 2024-03-13 | Let Her Cook      | L   | 0.314      | -            | -                | -                | -         |    -1.65 | akiyanora, amore, ayaka, Margo, meo |
|            2 |     3638 | 2024-02-24 | NAVI Javelins     | L   | 0.192      | -            | -                | -                | -         |    -1.73 | akiyanora, amore, ayaka, Margo, meo |
|            1 |     3766 | 2024-02-18 | dream catchers fe | W   | 0.153      | 0.143        | 0.019 (0.000)    | 0.182 (0.004)    | 0 (0.000) |     2.74 | akiyanora, amore, ayaka, Margo, meo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,641.90)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.894 | $300.00        | $268.15         |
| 2024-05-26 |      0.807 | $750.00        | $604.98         |
| 2024-05-05 |      0.666 | $250.00        | $166.44         |
| 2024-04-21 |      0.574 | $1,050.00      | $602.33         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
