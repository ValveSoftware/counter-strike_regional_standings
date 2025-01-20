### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [88](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_16.md)<br />
Regional Rank: [8]( ../../standings_asia_2025_01_16.md)<br />
<br />
Final Rank Value:  902.3<br />
<br />
Final Rank Value (902.3) = Starting Rank Value (865.5) + Head To Head Adjustments (36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.5
- 400 + ( ( 0.235 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 865.5


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
|           13 |     1108 | 2024-11-03 | Lynn Vision       | W   | 0.703      | 0.399        | 0.033 (0.009)    | 0.217 (0.061)    | 1 (0.703) |    13.23 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     1134 | 2024-11-02 | ATOX              | W   | 0.697      | 0.399        | 0.022 (0.006)    | 0.114 (0.032)    | 1 (0.697) |     8.24 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     1473 | 2024-10-16 | Bromo             | W   | 0.584      | 0.143        | 0.009 (0.001)    | 0.113 (0.009)    | 0 (0.000) |     4.93 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     2904 | 2024-08-29 | Rare Atom         | L   | 0.264      | -            | -                | -                | -         |    -2.75 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            9 |     2975 | 2024-08-28 | Rare Atom         | W   | 0.256      | 0.143        | 0.059 (0.002)    | 0.264 (0.010)    | 0 (0.000) |     5.48 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            8 |     3029 | 2024-08-27 | Teamwork          | W   | 0.249      | 0.143        | 0.000 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     0.89 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            7 |     3036 | 2024-08-27 | Steel Helmet      | W   | 0.249      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     0.52 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            6 |     3747 | 2024-08-06 | Chinggis Warriors | W   | 0.111      | 0.380        | 0.002 (0.000)    | 0.044 (0.002)    | 1 (0.111) |     0.97 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            5 |     3771 | 2024-08-05 | Rare Atom         | W   | 0.104      | 0.380        | 0.059 (0.002)    | 0.264 (0.010)    | 1 (0.104) |     2.26 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            4 |     3807 | 2024-08-04 | Gaimin Gladiators | W   | 0.097      | 0.380        | 0.080 (0.003)    | 0.873 (0.032)    | 1 (0.097) |     1.87 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            3 |     3876 | 2024-08-02 | Rare Atom         | L   | 0.084      | -            | -                | -                | -         |    -0.83 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            2 |     3918 | 2024-08-01 | Rare Atom         | W   | 0.077      | 0.143        | 0.059 (0.001)    | 0.264 (0.003)    | 0 (0.000) |     1.68 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            1 |     3925 | 2024-08-01 | CatEvil           | W   | 0.077      | 0.143        | -                | 0.152 (0.002)    | -         |     0.35 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,067.05)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.703 | $15,000.00     | $10,544.75      |
| 2024-08-06 |      0.111 | $13,755.00     | $1,522.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
