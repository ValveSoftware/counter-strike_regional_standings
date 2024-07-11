### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [165](../standings_global.md)<br />
Regional Rank: [105]( ../standings_europe.md)<br />
Final Rank Value:  676.9<br />
<br />
Final Rank Value (676.9) = Starting Rank Value (689.8) + Head To Head Adjustments (-12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.8
- 400 + ( ( 0.137 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 689.8


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
|           14 |      433 | 2024-06-08 | NOFEAR5           | L   | 0.981      | -            | -                | -                | -         |   -14.70 | akiyanora, amore, ayaka, Margo, meo |
|           13 |      457 | 2024-06-08 | ENCE Athena       | W   | 0.979      | 0.270        | 0.004 (0.001)    | 0.063 (0.017)    | 0 (0.000) |    13.80 | akiyanora, amore, ayaka, Margo, meo |
|           12 |      895 | 2024-05-26 | NIP Impact        | W   | 0.893      | 0.250        | 0.008 (0.002)    | 0.199 (0.044)    | 0 (0.000) |    17.84 | akiyanora, amore, ayaka, Margo, meo |
|           11 |     1122 | 2024-05-18 | Imperial fe       | L   | 0.840      | -            | -                | -                | -         |    -1.66 | akiyanora, amore, ayaka, Margo, meo |
|           10 |     1505 | 2024-05-05 | Imperial fe       | L   | 0.753      | -            | -                | -                | -         |    -1.51 | akiyanora, amore, ayaka, Margo, meo |
|            9 |     1866 | 2024-04-19 | NAVI Javelins     | L   | 0.647      | -            | -                | -                | -         |    -4.18 | akiyanora, amore, ayaka, Margo, meo |
|            8 |     2078 | 2024-04-11 | Fearless Cheetahs | L   | 0.594      | -            | -                | -                | -         |    -7.57 | akiyanora, amore, ayaka, Margo, meo |
|            7 |     2132 | 2024-04-10 | Permitta W        | L   | 0.586      | -            | -                | -                | -         |   -13.48 | akiyanora, amore, ayaka, Margo, meo |
|            6 |     2215 | 2024-04-08 | Imperial fe       | L   | 0.573      | -            | -                | -                | -         |    -1.31 | akiyanora, amore, ayaka, Margo, meo |
|            5 |     2448 | 2024-03-28 | 1WIN Gang         | W   | 0.501      | 0.331        | 0.002 (0.000)    | 0.024 (0.004)    | 0 (0.000) |     7.66 | akiyanora, amore, ayaka, Margo, meo |
|            4 |     2601 | 2024-03-20 | Spirit fe         | L   | 0.448      | -            | -                | -                | -         |    -7.38 | akiyanora, amore, ayaka, Margo, meo |
|            3 |     2752 | 2024-03-13 | Let Her Cook      | L   | 0.401      | -            | -                | -                | -         |    -1.78 | akiyanora, amore, ayaka, Margo, meo |
|            2 |     3186 | 2024-02-24 | NAVI Javelins     | L   | 0.279      | -            | -                | -                | -         |    -2.29 | akiyanora, amore, ayaka, Margo, meo |
|            1 |     3314 | 2024-02-18 | dreamcatchers fe  | W   | 0.240      | 0.143        | 0.008 (0.000)    | 0.089 (0.003)    | 0 (0.000) |     3.66 | akiyanora, amore, ayaka, Margo, meo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,845.96)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.981 | $300.00        | $294.20         |
| 2024-05-26 |      0.893 | $750.00        | $670.11         |
| 2024-05-05 |      0.753 | $250.00        | $188.15         |
| 2024-04-21 |      0.660 | $1,050.00      | $693.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
