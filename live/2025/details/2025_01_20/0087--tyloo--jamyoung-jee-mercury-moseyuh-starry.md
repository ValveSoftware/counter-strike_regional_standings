### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [87](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_20.md)<br />
Regional Rank: [8]( ../../standings_asia_2025_01_20.md)<br />
<br />
Final Rank Value:  895.3<br />
<br />
Final Rank Value (895.3) = Starting Rank Value (860.2) + Head To Head Adjustments (35.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.438[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 860.2
- 400 + ( ( 0.232 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 860.2


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
|           13 |     1094 | 2024-11-03 | Lynn Vision       | W   | 0.683      | 0.399        | 0.032 (0.009)    | 0.217 (0.059)    | 1 (0.683) |    13.01 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     1120 | 2024-11-02 | ATOX              | W   | 0.677      | 0.399        | 0.022 (0.006)    | 0.115 (0.031)    | 1 (0.677) |     8.18 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     1459 | 2024-10-16 | Bromo             | W   | 0.564      | 0.143        | 0.009 (0.001)    | 0.108 (0.009)    | 0 (0.000) |     4.90 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     2890 | 2024-08-29 | Rare Atom         | L   | 0.244      | -            | -                | -                | -         |    -2.48 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            9 |     2961 | 2024-08-28 | Rare Atom         | W   | 0.237      | 0.143        | 0.060 (0.002)    | 0.262 (0.009)    | 0 (0.000) |     5.12 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            8 |     3015 | 2024-08-27 | Teamwork          | W   | 0.230      | 0.143        | 0.000 (0.000)    | 0.046 (0.002)    | 0 (0.000) |     0.84 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            7 |     3022 | 2024-08-27 | Steel Helmet      | W   | 0.229      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.50 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            6 |     3733 | 2024-08-06 | Chinggis Warriors | W   | 0.091      | 0.380        | 0.002 (0.000)    | 0.042 (0.001)    | 1 (0.091) |     0.80 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            5 |     3757 | 2024-08-05 | Rare Atom         | W   | 0.084      | 0.380        | 0.060 (0.002)    | 0.262 (0.008)    | 1 (0.084) |     1.84 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            4 |     3793 | 2024-08-04 | Gaimin Gladiators | W   | 0.078      | 0.380        | 0.080 (0.002)    | 0.875 (0.026)    | 1 (0.078) |     1.50 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            3 |     3862 | 2024-08-02 | Rare Atom         | L   | 0.065      | -            | -                | -                | -         |    -0.62 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            2 |     3904 | 2024-08-01 | Rare Atom         | W   | 0.058      | 0.143        | 0.060 (0.000)    | 0.262 (0.002)    | 0 (0.000) |     1.26 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            1 |     3911 | 2024-08-01 | CatEvil           | W   | 0.057      | 0.143        | -                | 0.150 (0.001)    | -         |     0.26 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,501.24)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.683 | $15,000.00     | $10,249.59      |
| 2024-08-06 |      0.091 | $13,755.00     | $1,251.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
