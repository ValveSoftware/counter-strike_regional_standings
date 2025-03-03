### Roster Details<br />
Team Name: PARIVISION<br />
Roster: alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert<br />
Global Rank: [137](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [92]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  712.8<br />
<br />
Final Rank Value (712.8) = Starting Rank Value (709.5) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 709.5
- 400 + ( ( 0.161 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 709.5


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
|           15 |     1369 | 2024-11-22 | TSM               | L   | 0.524      | -            | -                | -                | -         |    -8.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           14 |     1389 | 2024-11-21 | Ninjas in Pyjamas | L   | 0.518      | -            | -                | -                | -         |    -5.31 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           13 |     1397 | 2024-11-20 | Falcons           | L   | 0.517      | -            | -                | -                | -         |    -0.03 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           12 |     1728 | 2024-11-07 | Nemiga            | L   | 0.425      | -            | -                | -                | -         |    -2.15 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           11 |     1734 | 2024-11-06 | SINNERS           | W   | 0.420      | 0.426        | 0.026 (0.005)    | 0.503 (0.090)    | 0 (0.000) |     9.44 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|           10 |     2109 | 2024-10-18 | BC.Game           | L   | 0.293      | -            | -                | -                | -         |    -1.61 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            9 |     2129 | 2024-10-17 | fnatic            | L   | 0.287      | -            | -                | -                | -         |    -1.37 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            8 |     2157 | 2024-10-16 | Sashi             | L   | 0.281      | -            | -                | -                | -         |    -2.09 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            7 |     2164 | 2024-10-16 | Solid             | W   | 0.280      | 0.624        | 0.023 (0.004)    | 0.643 (0.112)    | 1 (0.280) |     5.67 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            6 |     2189 | 2024-10-15 | Aurora            | W   | 0.274      | 0.500        | 0.019 (0.003)    | 0.482 (0.066)    | 0 (0.000) |     5.39 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            5 |     2437 | 2024-10-05 | 3DMAX             | L   | 0.205      | -            | -                | -                | -         |    -0.07 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            4 |     2513 | 2024-10-03 | Spirit Academy    | W   | 0.192      | 0.435        | 0.067 (0.006)    | 0.694 (0.058)    | 0 (0.000) |     4.55 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            3 |     2936 | 2024-09-23 | Monte             | L   | 0.125      | -            | -                | -                | -         |    -1.27 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            2 |     3251 | 2024-09-12 | GUN5              | L   | 0.054      | -            | -                | -                | -         |    -0.36 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |
|            1 |     3300 | 2024-09-11 | 9INE              | W   | 0.045      | 0.384        | 0.011 (0.000)    | 0.273 (0.005)    | 0 (0.000) |     0.78 | alpha, ArtFr0st, BELCHONOKK, Patsi, Qikert |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,034.44)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.306 | $5,000.00      | $1,532.27       |
| 2024-10-06 |      0.214 | $2,000.00      | $428.73         |
| 2024-09-26 |      0.147 | $500.00        | $73.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
