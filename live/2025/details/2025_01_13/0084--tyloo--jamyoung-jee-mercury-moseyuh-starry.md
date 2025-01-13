### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [84](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_13.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_01_13.md)<br />
<br />
Final Rank Value:  925.2<br />
<br />
Final Rank Value (925.2) = Starting Rank Value (879.7) + Head To Head Adjustments (45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.441[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.215[<sup>2</sup>](#table1)

The average of these factors is 0.242<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 879.7
- 400 + ( ( 0.242 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 879.7


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
|           13 |     1081 | 2024-11-03 | Lynn Vision       | W   | 0.725      | 0.399        | 0.047 (0.014)    | 0.264 (0.076)    | 1 (0.725) |    14.99 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     1107 | 2024-11-02 | ATOX              | W   | 0.719      | 0.399        | 0.022 (0.006)    | 0.114 (0.033)    | 1 (0.719) |     8.06 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     1446 | 2024-10-16 | Bromo             | W   | 0.606      | 0.143        | 0.009 (0.001)    | 0.118 (0.010)    | 0 (0.000) |     4.70 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     2877 | 2024-08-29 | Rare Atom         | L   | 0.286      | -            | -                | -                | -         |    -1.14 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            9 |     2948 | 2024-08-28 | Rare Atom         | W   | 0.279      | 0.143        | 0.118 (0.005)    | 0.403 (0.016)    | 0 (0.000) |     7.73 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            8 |     3002 | 2024-08-27 | Teamwork          | W   | 0.272      | 0.143        | 0.000 (0.000)    | 0.051 (0.002)    | 0 (0.000) |     0.90 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            7 |     3009 | 2024-08-27 | Steel Helmet      | W   | 0.271      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.52 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            6 |     3720 | 2024-08-06 | Chinggis Warriors | W   | 0.133      | 0.380        | 0.002 (0.000)    | 0.047 (0.002)    | 1 (0.133) |     1.14 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            5 |     3744 | 2024-08-05 | Rare Atom         | W   | 0.126      | 0.380        | 0.118 (0.006)    | 0.403 (0.019)    | 1 (0.126) |     3.54 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            4 |     3780 | 2024-08-04 | Gaimin Gladiators | W   | 0.120      | 0.380        | 0.080 (0.004)    | 0.871 (0.040)    | 1 (0.120) |     2.23 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            3 |     3849 | 2024-08-02 | Rare Atom         | L   | 0.107      | -            | -                | -                | -         |    -0.37 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            2 |     3891 | 2024-08-01 | Rare Atom         | W   | 0.100      | 0.143        | 0.118 (0.002)    | 0.403 (0.006)    | 0 (0.000) |     2.80 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            1 |     3898 | 2024-08-01 | CatEvil           | W   | 0.099      | 0.143        | -                | 0.155 (0.002)    | -         |     0.42 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,710.06)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.725 | $15,000.00     | $10,880.17      |
| 2024-08-06 |      0.133 | $13,755.00     | $1,829.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
