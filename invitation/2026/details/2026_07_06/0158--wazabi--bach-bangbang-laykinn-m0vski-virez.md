### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski, VireZ<br />
Global Rank: [158](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [111]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  818.8<br />
<br />
Final Rank Value (818.8) = Starting Rank Value (876.5) + Head To Head Adjustments (-57.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.380[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.5
- 400 + ( ( 0.253 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 876.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      687 | 2026-05-30 | Young Ninjas   | L   | 0.952      | -            | -                | -                | -         |   -12.54 | BacH, BangBang, Bukhavez, Laykinn, m0vski |
|           17 |      733 | 2026-05-29 | Atreides       | L   | 0.945      | -            | -                | -                | -         |   -14.43 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           16 |      768 | 2026-05-28 | Young Ninjas   | W   | 0.939      | 0.384        | 0.004 (0.001)    | 0.619 (0.224)    | 0 (0.000) |    15.20 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           15 |      778 | 2026-05-28 | Wampirki       | L   | 0.939      | -            | -                | -                | -         |   -23.52 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           14 |      931 | 2026-05-24 | Entropy        | L   | 0.912      | -            | -                | -                | -         |   -14.33 | BacH, BangBang, Laykinn, m0vski, mAnGo    |
|           13 |     1906 | 2026-04-26 | MASONIC        | L   | 0.725      | -            | -                | -                | -         |    -9.75 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           12 |     1935 | 2026-04-25 | IMA PROBLEM    | W   | 0.721      | 0.322        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.721) |     1.47 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           11 |     2263 | 2026-04-12 | Entropy        | L   | 0.633      | -            | -                | -                | -         |   -10.86 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|           10 |     2265 | 2026-04-12 | EAC            | L   | 0.633      | -            | -                | -                | -         |    -3.92 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            9 |     2285 | 2026-04-11 | Entropy        | W   | 0.627      | 0.341        | 0.004 (0.001)    | 0.323 (0.069)    | 1 (0.627) |     8.71 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            8 |     2294 | 2026-04-11 | SAW Youngsters | W   | 0.625      | 0.341        | 0.003 (0.001)    | 0.391 (0.083)    | 1 (0.625) |     7.57 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            7 |     2843 | 2026-04-01 | Falcons Force  | L   | 0.559      | -            | -                | -                | -         |   -11.33 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            6 |     2856 | 2026-04-01 | 3DMAX          | L   | 0.558      | -            | -                | -                | -         |    -1.62 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            5 |     2887 | 2026-03-31 | Z7             | W   | 0.554      | 0.340        | 0.000 (0.000)    | 0.020 (0.004)    | 1 (0.554) |     1.28 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            4 |     2898 | 2026-03-31 | maquinas       | W   | 0.554      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.554) |     1.03 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            3 |     2920 | 2026-03-31 | AM             | L   | 0.553      | -            | -                | -                | -         |    -2.89 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            2 |     2942 | 2026-03-31 | B8             | W   | 0.552      | 0.340        | 0.319 (0.060)    | 0.604 (0.114)    | 1 (0.552) |    17.12 | BacH, BangBang, Laykinn, m0vski, VireZ    |
|            1 |     2954 | 2026-03-31 | Phantom        | L   | 0.552      | -            | -                | -                | -         |    -4.93 | BacH, BangBang, Laykinn, m0vski, VireZ    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,109.76)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      0.634 | $1,750.00      | $1,109.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
