### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [83](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_31.md)<br />
Regional Rank: [6]( ../../standings_asia_2024_12_31.md)<br />
<br />
Final Rank Value:  934.7<br />
<br />
Final Rank Value (934.7) = Starting Rank Value (887.5) + Head To Head Adjustments (47.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.249[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 887.5
- 400 + ( ( 0.250 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 887.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1025 | 2024-11-03 | Lynn Vision       | W   | 0.824      | 0.399        | 0.031 (0.010)    | 0.233 (0.076)    | 1 (0.824) |    14.55 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           16 |     1051 | 2024-11-02 | ATOX              | W   | 0.818      | 0.399        | 0.020 (0.006)    | 0.122 (0.040)    | 1 (0.818) |     8.68 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           15 |     1390 | 2024-10-16 | Bromo             | W   | 0.705      | 0.143        | 0.008 (0.001)    | 0.146 (0.015)    | 0 (0.000) |     5.12 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           14 |     2821 | 2024-08-29 | Rare Atom         | L   | 0.385      | -            | -                | -                | -         |    -4.49 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           13 |     2892 | 2024-08-28 | Rare Atom         | W   | 0.377      | 0.143        | 0.052 (0.003)    | 0.300 (0.016)    | 0 (0.000) |     7.65 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     2946 | 2024-08-27 | Teamwork          | W   | 0.371      | 0.143        | 0.000 (0.000)    | 0.063 (0.003)    | 0 (0.000) |     1.17 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     2953 | 2024-08-27 | Steel Helmet      | W   | 0.370      | -            | -                | -                | 0 (0.000) |     0.66 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     3664 | 2024-08-06 | Chinggis Warriors | W   | 0.232      | 0.380        | 0.003 (0.000)    | 0.063 (0.006)    | 1 (0.232) |     1.99 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            9 |     3688 | 2024-08-05 | Rare Atom         | W   | 0.225      | 0.380        | 0.052 (0.004)    | 0.300 (0.026)    | 1 (0.225) |     4.69 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            8 |     3724 | 2024-08-04 | Gaimin Gladiators | W   | 0.219      | 0.380        | 0.071 (0.006)    | 0.923 (0.077)    | 1 (0.219) |     4.02 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            7 |     3793 | 2024-08-02 | Rare Atom         | L   | 0.206      | -            | -                | -                | -         |    -2.19 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            6 |     3835 | 2024-08-01 | Rare Atom         | W   | 0.199      | 0.143        | 0.052 (0.001)    | 0.300 (0.009)    | 0 (0.000) |     4.16 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            5 |     3842 | 2024-08-01 | CatEvil           | W   | 0.198      | 0.143        | -                | 0.178 (0.005)    | -         |     0.85 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            4 |     4534 | 2024-07-13 | Rare Atom         | L   | 0.072      | -            | -                | -                | -         |    -0.78 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            3 |     4536 | 2024-07-13 | CatEvil           | W   | 0.072      | -            | -                | -                | -         |     0.30 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            2 |     4548 | 2024-07-12 | Chinggis Warriors | W   | 0.064      | 0.143        | 0.003 (0.000)    | -                | -         |     0.57 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            1 |     4551 | 2024-07-12 | Alter Ego         | W   | 0.064      | -            | -                | -                | -         |     0.21 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,551.94)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.824 | $15,000.00     | $12,362.64      |
| 2024-08-06 |      0.232 | $13,755.00     | $3,189.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
