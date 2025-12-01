### Roster Details<br />
Team Name: The QUBE<br />
Roster: bkzcurs3d, Cozen, Kamui, Paranormal, soloooS<br />
Global Rank: [163](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_12_01.md)<br />
Regional Rank: [20]( ../../standings_asia_2025_12_01.md)<br />
<br />
Final Rank Value:  717.0<br />
<br />
Final Rank Value (717.0) = Starting Rank Value (702.4) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.4
- 400 + ( ( 0.159 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 702.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      941 | 2025-10-27 | FengDa            | L   | 0.966      | -            | -                | -                | -         |    -7.42 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|           11 |     1000 | 2025-10-26 | BORING PLAYERS    | W   | 0.959      | 0.333        | 0.002 (0.001)    | 0.191 (0.061)    | 0 (0.000) |    18.70 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|           10 |     1053 | 2025-10-25 | GATERON           | W   | 0.952      | 0.333        | 0.001 (0.000)    | 0.180 (0.057)    | 0 (0.000) |    15.27 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            9 |     1118 | 2025-10-24 | DQZS              | W   | 0.946      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.86 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            8 |     1161 | 2025-10-23 | IHC               | L   | 0.939      | -            | -                | -                | -         |   -18.94 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            7 |     1887 | 2025-10-01 | Chinggis Warriors | L   | 0.796      | -            | -                | -                | -         |    -5.34 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            6 |     2033 | 2025-09-28 | Chinggis Warriors | W   | 0.771      | 0.333        | 0.022 (0.006)    | 0.419 (0.108)    | 1 (0.771) |    19.57 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            5 |     2037 | 2025-09-28 | Eruption          | L   | 0.771      | -            | -                | -                | -         |    -8.11 | bkzcurs3d, Cozen, Kamui, Paranormal, soloooS |
|            4 |     2994 | 2025-08-29 | Eruption          | L   | 0.572      | -            | -                | -                | -         |    -6.23 | Aceari, Cozen, Kamui, Paranormal, soloooS    |
|            3 |     3006 | 2025-08-29 | The Huns          | L   | 0.571      | -            | -                | -                | -         |    -1.97 | Aceari, Cozen, Kamui, Paranormal, soloooS    |
|            2 |     4147 | 2025-07-11 | HOTU              | L   | 0.246      | -            | -                | -                | -         |    -0.24 | Aceari, bladee, Cozen, Kamui, soloooS        |
|            1 |     4157 | 2025-07-11 | Underground       | W   | 0.244      | 0.624        | 0.001 (0.000)    | 0.162 (0.025)    | 0 (0.000) |     4.43 | Aceari, bladee, Cozen, Kamui, soloooS        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,198.87)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-02 |      0.799 | $1,000.00      | $799.15         |
| 2025-09-28 |      0.772 | $1,250.00      | $965.59         |
| 2025-08-30 |      0.579 | $750.00        | $434.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
