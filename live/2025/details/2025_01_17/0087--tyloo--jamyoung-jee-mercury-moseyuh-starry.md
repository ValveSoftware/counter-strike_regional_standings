### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [87](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_17.md)<br />
Regional Rank: [8]( ../../standings_asia_2025_01_17.md)<br />
<br />
Final Rank Value:  900.3<br />
<br />
Final Rank Value (900.3) = Starting Rank Value (864.0) + Head To Head Adjustments (36.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 864.0
- 400 + ( ( 0.234 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 864.0


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
|           13 |     1085 | 2024-11-03 | Lynn Vision       | W   | 0.697      | 0.399        | 0.032 (0.009)    | 0.217 (0.060)    | 1 (0.697) |    13.16 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     1111 | 2024-11-02 | ATOX              | W   | 0.691      | 0.399        | 0.022 (0.006)    | 0.114 (0.031)    | 1 (0.691) |     8.22 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     1450 | 2024-10-16 | Bromo             | W   | 0.578      | 0.143        | 0.009 (0.001)    | 0.111 (0.009)    | 0 (0.000) |     4.92 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     2881 | 2024-08-29 | Rare Atom         | L   | 0.258      | -            | -                | -                | -         |    -2.67 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            9 |     2952 | 2024-08-28 | Rare Atom         | W   | 0.250      | 0.143        | 0.059 (0.002)    | 0.263 (0.009)    | 0 (0.000) |     5.37 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            8 |     3006 | 2024-08-27 | Teamwork          | W   | 0.243      | 0.143        | 0.000 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     0.88 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            7 |     3013 | 2024-08-27 | Steel Helmet      | W   | 0.243      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.52 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            6 |     3724 | 2024-08-06 | Chinggis Warriors | W   | 0.105      | 0.380        | 0.002 (0.000)    | 0.044 (0.002)    | 1 (0.105) |     0.92 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            5 |     3748 | 2024-08-05 | Rare Atom         | W   | 0.098      | 0.380        | 0.059 (0.002)    | 0.263 (0.010)    | 1 (0.098) |     2.13 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            4 |     3784 | 2024-08-04 | Gaimin Gladiators | W   | 0.091      | 0.380        | 0.080 (0.003)    | 0.873 (0.030)    | 1 (0.091) |     1.75 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            3 |     3853 | 2024-08-02 | Rare Atom         | L   | 0.078      | -            | -                | -                | -         |    -0.76 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            2 |     3895 | 2024-08-01 | Rare Atom         | W   | 0.071      | 0.143        | 0.059 (0.001)    | 0.263 (0.003)    | 0 (0.000) |     1.55 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            1 |     3902 | 2024-08-01 | CatEvil           | W   | 0.070      | 0.143        | -                | 0.151 (0.002)    | -         |     0.32 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,891.45)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.697 | $15,000.00     | $10,453.15      |
| 2024-08-06 |      0.105 | $13,755.00     | $1,438.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
