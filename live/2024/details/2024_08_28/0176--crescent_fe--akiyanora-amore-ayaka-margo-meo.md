### Roster Details<br />
Team Name: Crescent fe<br />
Roster: akiyanora, amore, ayaka, Margo, meo<br />
Global Rank: [176](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [113]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  655.6<br />
<br />
Final Rank Value (655.6) = Starting Rank Value (650.4) + Head To Head Adjustments (5.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.126<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.4
- 400 + ( ( 0.126 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 650.4


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
|           13 |      795 | 2024-08-06 | ENCE Athena       | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.051 (0.007)    | 0 (0.000) |    13.58 | akiyanora, amore, ayaka, Margo, meo |
|           12 |     2130 | 2024-06-08 | NOFEAR5           | L   | 0.661      | -            | -                | -                | -         |   -10.05 | akiyanora, amore, ayaka, Margo, meo |
|           11 |     2154 | 2024-06-08 | ENCE Athena       | W   | 0.660      | 0.270        | 0.002 (0.000)    | 0.051 (0.009)    | 0 (0.000) |     9.42 | akiyanora, amore, ayaka, Margo, meo |
|           10 |     2592 | 2024-05-26 | NIP Impact        | W   | 0.574      | 0.250        | 0.007 (0.001)    | 0.166 (0.024)    | 0 (0.000) |    10.69 | akiyanora, amore, ayaka, Margo, meo |
|            9 |     2819 | 2024-05-18 | Imperial fe       | L   | 0.520      | -            | -                | -                | -         |    -2.23 | akiyanora, amore, ayaka, Margo, meo |
|            8 |     3202 | 2024-05-05 | Imperial fe       | L   | 0.433      | -            | -                | -                | -         |    -1.90 | akiyanora, amore, ayaka, Margo, meo |
|            7 |     3563 | 2024-04-19 | NAVI Javelins     | L   | 0.327      | -            | -                | -                | -         |    -3.18 | akiyanora, amore, ayaka, Margo, meo |
|            6 |     3775 | 2024-04-11 | Fearless Cheetahs | L   | 0.274      | -            | -                | -                | -         |    -4.10 | akiyanora, amore, ayaka, Margo, meo |
|            5 |     3829 | 2024-04-10 | Permitta W        | L   | 0.266      | -            | -                | -                | -         |    -5.97 | akiyanora, amore, ayaka, Margo, meo |
|            4 |     3912 | 2024-04-08 | Imperial fe       | L   | 0.253      | -            | -                | -                | -         |    -1.22 | akiyanora, amore, ayaka, Margo, meo |
|            3 |     4145 | 2024-03-28 | 1WIN Gang         | W   | 0.181      | 0.331        | 0.001 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     2.76 | akiyanora, amore, ayaka, Margo, meo |
|            2 |     4298 | 2024-03-20 | Spirit fe         | L   | 0.128      | -            | -                | -                | -         |    -1.98 | akiyanora, amore, ayaka, Margo, meo |
|            1 |     4449 | 2024-03-13 | Let Her Cook      | L   | 0.081      | -            | -                | -                | -         |    -0.60 | akiyanora, amore, ayaka, Margo, meo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,094.50)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      0.661 | $300.00        | $198.27         |
| 2024-05-26 |      0.574 | $750.00        | $430.28         |
| 2024-05-05 |      0.433 | $250.00        | $108.20         |
| 2024-04-21 |      0.341 | $1,050.00      | $357.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
