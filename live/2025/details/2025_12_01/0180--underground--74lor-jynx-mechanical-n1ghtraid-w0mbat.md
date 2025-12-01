### Roster Details<br />
Team Name: Underground<br />
Roster: 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat<br />
Global Rank: [180](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [24]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  685.8<br />
<br />
Final Rank Value (685.8) = Starting Rank Value (763.9) + Head To Head Adjustments (-78.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.303[<sup>2</sup>](#table1)

The average of these factors is 0.191<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 763.9
- 400 + ( ( 0.191 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 763.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       11 | 2025-11-29 | Mindfreak       | L   | 1.000      | -            | -                | -                | -         |   -12.06 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat      |
|           14 |       14 | 2025-11-29 | Rooster         | L   | 1.000      | -            | -                | -                | -         |   -10.68 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat      |
|           13 |       17 | 2025-11-29 | Mindfreak       | W   | 1.000      | 0.279        | 0.005 (0.001)    | 0.471 (0.131)    | 1 (1.000) |    19.06 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat      |
|           12 |       37 | 2025-11-29 | BBBMBCBS        | W   | 1.000      | 0.279        | 0.000 (0.000)    | 0.068 (0.019)    | 1 (1.000) |     9.37 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat      |
|           11 |       40 | 2025-11-29 | blingus         | W   | 1.000      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.19 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat      |
|           10 |       42 | 2025-11-28 | Rooster         | L   | 1.000      | -            | -                | -                | -         |   -10.60 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat      |
|            9 |       91 | 2025-11-25 | Ground Zero     | L   | 1.000      | -            | -                | -                | -         |   -14.03 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat      |
|            8 |      146 | 2025-11-23 | Vantage         | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.095 (0.030)    | 0 (0.000) |    11.39 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat      |
|            7 |      178 | 2025-11-22 | LITE            | L   | 1.000      | -            | -                | -                | -         |   -19.02 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat      |
|            6 |     1127 | 2025-10-24 | Animus Victoria | L   | 0.945      | -            | -                | -                | -         |   -21.90 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL       |
|            5 |     1170 | 2025-10-23 | Vantage         | L   | 0.938      | -            | -                | -                | -         |   -19.86 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL       |
|            4 |     4151 | 2025-07-11 | KZG             | L   | 0.245      | -            | -                | -                | -         |    -5.32 | jayketh, Jynx, Mechanical, N1ghtraid, Omichella |
|            3 |     4157 | 2025-07-11 | The QUBE        | L   | 0.244      | -            | -                | -                | -         |    -4.43 | beeb, Jynx, Mechanical, N1ghtraid, Omichella    |
|            2 |     4201 | 2025-07-09 | FURY            | L   | 0.232      | -            | -                | -                | -         |    -6.05 | jayketh, Jynx, Mechanical, N1ghtraid, Omichella |
|            1 |     4219 | 2025-07-08 | DOG             | W   | 0.225      | 0.314        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     0.82 | jayketh, Jynx, Mechanical, N1ghtraid, Omichella |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($326.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      1.000 | $326.00        | $326.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
