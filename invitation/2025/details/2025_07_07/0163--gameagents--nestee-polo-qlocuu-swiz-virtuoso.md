### Roster Details<br />
Team Name: GameAgents<br />
Roster: nestee, POLO, Qlocuu, swiz, virtuoso<br />
Global Rank: [163](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  631.2<br />
<br />
Final Rank Value (631.2) = Starting Rank Value (626.5) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.121<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.5
- 400 + ( ( 0.121 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 626.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2993 | 2025-02-26 | NAVI Junior | L   | 0.327      | -            | -                | -                | -         |    -0.79 | nestee, POLO, Qlocuu, swiz, virtuoso |
|            4 |     3201 | 2025-02-19 | GUN5        | W   | 0.281      | 0.500        | 0.034 (0.005)    | 0.655 (0.092)    | 0 (0.000) |     7.84 | nestee, POLO, Qlocuu, swiz, virtuoso |
|            3 |     3754 | 2025-01-28 | Rebels      | L   | 0.135      | -            | -                | -                | -         |    -1.23 | nestee, POLO, Qlocuu, swiz, virtuoso |
|            2 |     3826 | 2025-01-24 | FAVBET      | L   | 0.108      | -            | -                | -                | -         |    -0.73 | nestee, POLO, Qlocuu, swiz, virtuoso |
|            1 |     3901 | 2025-01-22 | Astrum      | L   | 0.094      | -            | -                | -                | -         |    -0.42 | nestee, POLO, Qlocuu, swiz, virtuoso |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($410.52)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-11 |      0.821 | $500.00        | $410.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
