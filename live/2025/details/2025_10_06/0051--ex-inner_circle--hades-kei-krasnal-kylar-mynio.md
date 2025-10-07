### Roster Details<br />
Team Name: ex-Inner Circle<br />
Roster: hades, KEi, kRaSnaL, Kylar, mynio<br />
Global Rank: [51](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [33]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  1153.1<br />
<br />
Final Rank Value (1153.1) = Starting Rank Value (1118.3) + Head To Head Adjustments (34.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.616[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1118.3
- 400 + ( ( 0.367 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1118.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      159 | 2025-09-28 | 9INE         | L   | 1.000      | -            | -                | -                | -         |    -6.61 | hades, KEi, kRaSnaL, Kylar, mynio |
|           13 |      178 | 2025-09-28 | Partizan     | W   | 1.000      | 0.354        | 0.050 (0.018)    | 0.982 (0.348)    | 1 (1.000) |    13.64 | hades, KEi, kRaSnaL, Kylar, mynio |
|           12 |      185 | 2025-09-28 | fnatic       | W   | 1.000      | 0.354        | 0.146 (0.052)    | 0.891 (0.316)    | 1 (1.000) |    26.39 | hades, KEi, kRaSnaL, Kylar, mynio |
|           11 |      207 | 2025-09-27 | BIG          | W   | 1.000      | 0.354        | 0.100 (0.035)    | 0.718 (0.254)    | 1 (1.000) |    22.94 | hades, KEi, kRaSnaL, Kylar, mynio |
|           10 |      235 | 2025-09-27 | Partizan     | L   | 1.000      | -            | -                | -                | -         |   -16.71 | hades, KEi, kRaSnaL, Kylar, mynio |
|            9 |      243 | 2025-09-27 | Gentle Mates | W   | 1.000      | 0.354        | 0.233 (0.083)    | 1.000 (0.354)    | 1 (1.000) |    27.25 | hades, KEi, kRaSnaL, Kylar, mynio |
|            8 |      272 | 2025-09-26 | Nemesis      | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.041 (0.015)    | 1 (1.000) |     1.07 | hades, KEi, kRaSnaL, Kylar, mynio |
|            7 |      287 | 2025-09-26 | Tricked      | W   | 1.000      | 0.354        | 0.004 (0.001)    | 0.440 (0.156)    | 1 (1.000) |     8.36 | hades, KEi, kRaSnaL, Kylar, mynio |
|            6 |     1078 | 2025-08-29 | 9INE         | L   | 0.945      | -            | -                | -                | -         |    -4.71 | hades, KEi, kRaSnaL, Kylar, mynio |
|            5 |     1094 | 2025-08-29 | HyperSpirit  | L   | 0.945      | -            | -                | -                | -         |   -26.67 | hades, KEi, kRaSnaL, Kylar, mynio |
|            4 |     1659 | 2025-08-10 | Sashi        | L   | 0.820      | -            | -                | -                | -         |   -14.59 | hades, KEi, kRaSnaL, Kylar, mynio |
|            3 |     3108 | 2025-05-13 | ENCE         | L   | 0.227      | -            | -                | -                | -         |    -0.85 | dycha, KEi, kRaSnaL, Kylar, mynio |
|            2 |     3129 | 2025-05-12 | 9INE         | L   | 0.221      | -            | -                | -                | -         |    -0.73 | dycha, KEi, kRaSnaL, Kylar, mynio |
|            1 |     3158 | 2025-05-11 | ENCE         | W   | 0.215      | 0.435        | 0.177 (0.016)    | 1.000 (0.093)    | 0 (0.000) |     6.00 | dycha, KEi, kRaSnaL, Kylar, mynio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,200.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-28 |      1.000 | $3,200.00      | $3,200.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
