### Roster Details<br />
Team Name: AMKAL<br />
Roster: Forester, Krad, nota, topo, TRAVIS<br />
Global Rank: [98](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [69]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  781.8<br />
<br />
Final Rank Value (781.8) = Starting Rank Value (735.3) + Head To Head Adjustments (46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.174<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.3
- 400 + ( ( 0.174 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 735.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      814 | 2024-12-21 | Monte        | W   | 0.720      | 0.333        | 0.016 (0.004)    | 0.465 (0.112)    | 0 (0.000) |    12.91 | Forester, Krad, nota, topo, TRAVIS |
|           14 |      822 | 2024-12-20 | FORZE Reload | W   | 0.713      | 0.333        | 0.015 (0.004)    | 0.113 (0.027)    | 0 (0.000) |     9.32 | Forester, Krad, nota, topo, TRAVIS |
|           13 |      840 | 2024-12-19 | BC.Game      | W   | 0.705      | 0.333        | 0.021 (0.005)    | 0.269 (0.063)    | 0 (0.000) |    11.92 | Forester, Krad, nota, topo, TRAVIS |
|           12 |      903 | 2024-12-14 | ENCE         | L   | 0.674      | -            | -                | -                | -         |    -3.78 | Forester, Krad, nota, topo, TRAVIS |
|           11 |      935 | 2024-12-13 | WildLotus    | W   | 0.667      | 0.435        | 0.001 (0.000)    | 0.610 (0.177)    | 0 (0.000) |    12.41 | Forester, Krad, nota, topo, TRAVIS |
|           10 |     1700 | 2024-11-08 | 9INE         | L   | 0.433      | -            | -                | -                | -         |    -6.42 | Forester, Krad, nota, topo, TRAVIS |
|            9 |     1720 | 2024-11-07 | Tricked      | L   | 0.427      | -            | -                | -                | -         |    -5.14 | Forester, Krad, nota, topo, TRAVIS |
|            8 |     1761 | 2024-11-05 | NAVI Junior  | L   | 0.412      | -            | -                | -                | -         |    -3.06 | Forester, Krad, nota, topo, TRAVIS |
|            7 |     1803 | 2024-11-03 | WildLotus    | W   | 0.398      | 0.384        | 0.001 (0.000)    | 0.610 (0.093)    | 0 (0.000) |     7.17 | Forester, Krad, nota, topo, TRAVIS |
|            6 |     1838 | 2024-11-01 | Sashi        | W   | 0.387      | 0.384        | 0.013 (0.002)    | 0.651 (0.097)    | 0 (0.000) |     9.15 | Forester, Krad, nota, topo, TRAVIS |
|            5 |     1904 | 2024-10-29 | 500          | L   | 0.367      | -            | -                | -                | -         |    -2.34 | Forester, Krad, nota, topo, TRAVIS |
|            4 |     2882 | 2024-09-24 | Aurora       | L   | 0.134      | -            | -                | -                | -         |    -1.81 | Forester, Krad, nota, topo, TRAVIS |
|            3 |     2929 | 2024-09-23 | Nemiga       | W   | 0.127      | 0.384        | 0.171 (0.008)    | 0.380 (0.019)    | 0 (0.000) |     3.25 | Forester, Krad, nota, topo, TRAVIS |
|            2 |     3080 | 2024-09-18 | WildLotus    | W   | 0.092      | 0.384        | 0.001 (0.000)    | 0.610 (0.022)    | 0 (0.000) |     1.50 | Forester, Krad, nota, topo, TRAVIS |
|            1 |     3269 | 2024-09-12 | B8           | W   | 0.052      | 0.384        | 0.123 (0.002)    | 0.735 (0.015)    | 0 (0.000) |     1.44 | Forester, Krad, nota, topo, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,105.06)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.720 | $5,000.00      | $3,597.73       |
| 2024-12-15 |      0.680 | $2,000.00      | $1,360.46       |
| 2024-09-26 |      0.147 | $1,000.00      | $146.87         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
