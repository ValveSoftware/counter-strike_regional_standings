### Roster Details<br />
Team Name: TYLOO<br />
Roster: JamYoung, Jee, Mercury, Moseyuh, Starry<br />
Global Rank: [86](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_01_06.md)<br />
Regional Rank: [7]( ../../standings_asia_2025_01_06.md)<br />
<br />
Final Rank Value:  923.8<br />
<br />
Final Rank Value (923.8) = Starting Rank Value (881.2) + Head To Head Adjustments (42.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.230[<sup>2</sup>](#table1)

The average of these factors is 0.243<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 881.2
- 400 + ( ( 0.243 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 881.2


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
|           17 |     1040 | 2024-11-03 | Lynn Vision       | W   | 0.772      | 0.399        | 0.032 (0.010)    | 0.219 (0.067)    | 1 (0.772) |    13.99 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           16 |     1066 | 2024-11-02 | ATOX              | W   | 0.765      | 0.399        | 0.021 (0.006)    | 0.115 (0.035)    | 1 (0.765) |     8.49 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           15 |     1405 | 2024-10-16 | Bromo             | W   | 0.652      | 0.143        | 0.009 (0.001)    | 0.129 (0.012)    | 0 (0.000) |     5.04 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           14 |     2836 | 2024-08-29 | Rare Atom         | L   | 0.333      | -            | -                | -                | -         |    -3.73 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           13 |     2907 | 2024-08-28 | Rare Atom         | W   | 0.325      | 0.143        | 0.056 (0.003)    | 0.275 (0.013)    | 0 (0.000) |     6.71 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           12 |     2961 | 2024-08-27 | Teamwork          | W   | 0.318      | 0.143        | 0.000 (0.000)    | 0.056 (0.003)    | 0 (0.000) |     1.05 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           11 |     2968 | 2024-08-27 | Steel Helmet      | W   | 0.317      | -            | -                | -                | 0 (0.000) |     0.60 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|           10 |     3679 | 2024-08-06 | Chinggis Warriors | W   | 0.179      | 0.380        | 0.003 (0.000)    | 0.053 (0.004)    | 1 (0.179) |     1.56 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            9 |     3703 | 2024-08-05 | Rare Atom         | W   | 0.173      | 0.380        | 0.056 (0.004)    | 0.275 (0.018)    | 1 (0.173) |     3.64 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            8 |     3739 | 2024-08-04 | Gaimin Gladiators | W   | 0.166      | 0.380        | 0.075 (0.005)    | 0.876 (0.055)    | 1 (0.166) |     3.11 | JamYoung, Jee, Mercury, Moseyuh, Starry  |
|            7 |     3808 | 2024-08-02 | Rare Atom         | L   | 0.153      | -            | -                | -                | -         |    -1.59 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            6 |     3850 | 2024-08-01 | Rare Atom         | W   | 0.146      | 0.143        | 0.056 (0.001)    | 0.275 (0.006)    | 0 (0.000) |     3.09 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            5 |     3857 | 2024-08-01 | CatEvil           | W   | 0.145      | 0.143        | -                | 0.162 (0.003)    | -         |     0.62 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            4 |     4549 | 2024-07-13 | Rare Atom         | L   | 0.020      | -            | -                | -                | -         |    -0.21 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            3 |     4551 | 2024-07-13 | CatEvil           | W   | 0.019      | -            | -                | -                | -         |     0.08 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            2 |     4563 | 2024-07-12 | Chinggis Warriors | W   | 0.012      | 0.143        | 0.003 (0.000)    | -                | -         |     0.10 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |
|            1 |     4566 | 2024-07-12 | Alter Ego         | W   | 0.011      | -            | -                | -                | -         |     0.04 | JamYoung, Jee, Mercury, Moseyuh, zhokiNg |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,039.40)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.772 | $15,000.00     | $11,573.62      |
| 2024-08-06 |      0.179 | $13,755.00     | $2,465.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
