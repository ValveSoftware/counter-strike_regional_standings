### Roster Details<br />
Team Name: JANO<br />
Roster: allu, Cliqq, Jerppa, Sm1llee, Villeboe<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [157](../standings_global.md)<br />
Regional Rank: [101]( ../standings_europe.md)<br />
Final Rank Value:  696.5<br />
<br />
Final Rank Value (696.5) = Starting Rank Value (708.1) + Head To Head Adjustments (-11.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.1
- 400 + ( ( 0.146 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 708.1


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
|           15 |      730 | 2024-06-02 | FAVBET            | L   | 0.939      | -            | -                | -                | -         |    -9.76 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           14 |      832 | 2024-05-29 | Zero Tenacity     | L   | 0.914      | -            | -                | -                | -         |    -2.34 | allu, Cliqq, Jerppa, Sm1llee, Villeboe |
|           13 |     1667 | 2024-04-27 | Sashi             | L   | 0.700      | -            | -                | -                | -         |    -1.23 | allu, doto, Jerppa, juho, Sm1llee      |
|           12 |     1840 | 2024-04-20 | Sangal            | L   | 0.651      | -            | -                | -                | -         |    -1.69 | allu, doto, Jerppa, juho, Sm1llee      |
|           11 |     1873 | 2024-04-19 | NOM               | W   | 0.646      | 0.143        | 0.000 (0.000)    | 0.108 (0.010)    | 0 (0.000) |     6.07 | allu, doto, Jerppa, juho, Sm1llee      |
|           10 |     1973 | 2024-04-17 | RUBY              | L   | 0.631      | -            | -                | -                | -         |    -3.43 | allu, doto, Jerppa, juho, Sm1llee      |
|            9 |     1982 | 2024-04-17 | MOUZ NXT          | L   | 0.631      | -            | -                | -                | -         |    -2.05 | allu, doto, Jerppa, juho, Sm1llee      |
|            8 |     2063 | 2024-04-12 | Zero Tenacity     | W   | 0.598      | 0.371        | 0.153 (0.034)    | 1.000 (0.221)    | 0 (0.000) |    16.58 | allu, doto, Jerppa, juho, Sm1llee      |
|            7 |     2227 | 2024-04-08 | Permitta          | L   | 0.571      | -            | -                | -                | -         |    -3.14 | allu, doto, Jerppa, juho, Sm1llee      |
|            6 |     2262 | 2024-04-06 | Johnny Speeds     | L   | 0.559      | -            | -                | -                | -         |    -0.38 | allu, doto, Jerppa, juho, Sm1llee      |
|            5 |     2327 | 2024-04-04 | Gaimin Gladiators | L   | 0.545      | -            | -                | -                | -         |    -1.05 | allu, doto, Jerppa, juho, Sm1llee      |
|            4 |     2794 | 2024-03-12 | kONO              | L   | 0.393      | -            | -                | -                | -         |    -3.80 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            3 |     2884 | 2024-03-08 | INGLORIOUS        | W   | 0.365      | 0.143        | 0.000 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     3.69 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            2 |     2994 | 2024-03-04 | Endpoint          | L   | 0.339      | -            | -                | -                | -         |    -8.23 | allu, doto, Jelo, Jerppa, Sm1llee      |
|            1 |     3079 | 2024-02-29 | Sashi             | L   | 0.311      | -            | -                | -                | -         |    -0.83 | allu, doto, Jelo, Jerppa, Sm1llee      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($556.90)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
