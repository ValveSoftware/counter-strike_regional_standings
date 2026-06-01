### Roster Details<br />
Team Name: girl kissers<br />
Roster: kevin, lunari, TeXaSs, violet<br />
Global Rank: [330](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  503.0<br />
<br />
Final Rank Value (503.0) = Starting Rank Value (515.8) + Head To Head Adjustments (-12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.8
- 400 + ( ( 0.061 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 515.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1018 | 2026-04-30 | Incognito      | L   | 0.989      | -            | -                | -                | -         |   -12.29 | gadfly, kevin, lunari, TeXaSs, violet |
|            5 |     1137 | 2026-04-28 | insane players | W   | 0.971      | 0.354        | 0.013 (0.005)    | 0.372 (0.128)    | 0 (0.000) |    24.52 | kevin, lunari, madss, TeXaSs, violet  |
|            4 |     1142 | 2026-04-27 | Iowa Stormboar | L   | 0.969      | -            | -                | -                | -         |    -3.88 | kevin, lunari, madss, TeXaSs, violet  |
|            3 |     1721 | 2026-04-07 | mouse          | L   | 0.836      | -            | -                | -                | -         |   -11.81 | gadfly, kevin, lunari, TeXaSs, violet |
|            2 |     2029 | 2026-04-02 | Iowa Stormboar | L   | 0.802      | -            | -                | -                | -         |    -3.90 | gadfly, kevin, lunari, TeXaSs, violet |
|            1 |     2209 | 2026-03-31 | regain         | L   | 0.790      | -            | -                | -                | -         |    -5.45 | gadfly, kevin, lunari, TeXaSs, violet |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
