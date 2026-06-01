### Roster Details<br />
Team Name: SAW<br />
Roster: Ag1l, aragornN, krazy, MUTiRiS, story<br />
Global Rank: [250](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [161]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  655.6<br />
<br />
Final Rank Value (655.6) = Starting Rank Value (645.3) + Head To Head Adjustments (10.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.237[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 645.3
- 400 + ( ( 0.129 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 645.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5861 | 2025-12-21 | Ninjas in Pyjamas | L   | 0.122      | -            | -                | -                | -         |    -0.05 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            7 |     5865 | 2025-12-21 | Sharks            | W   | 0.120      | 0.309        | 0.060 (0.002)    | 0.459 (0.017)    | 1 (0.120) |     3.70 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            6 |     5869 | 2025-12-21 | Fuzos             | W   | 0.119      | 0.309        | 0.002 (0.000)    | 0.254 (0.009)    | 1 (0.119) |     2.40 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            5 |     5921 | 2025-12-19 | SAW               | W   | 0.106      | 0.309        | 0.001 (0.000)    | 0.207 (0.007)    | 1 (0.106) |     2.38 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            4 |     5927 | 2025-12-19 | WOLF              | W   | 0.105      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.105) |     0.66 | Ag1l, aragornN, krazy, MUTiRiS, SYDOX |
|            3 |     6064 | 2025-12-08 | ECSTATIC          | L   | 0.034      | -            | -                | -                | -         |    -0.06 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            2 |     6083 | 2025-12-07 | Nemiga            | W   | 0.028      | 0.435        | 0.135 (0.002)    | 1.000 (0.012)    | 0 (0.000) |     0.85 | Ag1l, aragornN, krazy, MUTiRiS, story |
|            1 |     6131 | 2025-12-05 | NOVAQ             | W   | 0.015      | 0.435        | 0.009 (0.000)    | 0.264 (0.002)    | 0 (0.000) |     0.37 | Ag1l, aragornN, krazy, MUTiRiS, story |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($372.62)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-21 |      0.122 | $1,762.00      | $214.35         |
| 2025-12-09 |      0.040 | $4,000.00      | $158.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
