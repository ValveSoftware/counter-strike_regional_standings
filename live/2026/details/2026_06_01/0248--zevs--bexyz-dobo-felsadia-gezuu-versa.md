### Roster Details<br />
Team Name: ZEVS<br />
Roster: bexyz, dobo, FELSADIA, GEZUU, versa<br />
Global Rank: [248](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  659.1<br />
<br />
Final Rank Value (659.1) = Starting Rank Value (666.5) + Head To Head Adjustments (-7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.221[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 666.5
- 400 + ( ( 0.140 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 666.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      959 | 2026-05-02 | Just Swing | L   | 0.998      | -            | -                | -                | -         |    -9.10 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            4 |     1008 | 2026-05-01 | Rooster    | L   | 0.991      | -            | -                | -                | -         |   -11.52 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            3 |     1049 | 2026-04-30 | BMZ        | W   | 0.985      | 0.471        | 0.007 (0.003)    | 0.304 (0.141)    | 1 (0.985) |    26.02 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            2 |     2000 | 2026-04-03 | NEXVOID    | L   | 0.805      | -            | -                | -                | -         |    -2.14 | bexyz, dobo, FELSADIA, GEZUU, versa |
|            1 |     2076 | 2026-04-02 | yunglean   | L   | 0.800      | -            | -                | -                | -         |   -10.68 | bexyz, dobo, FELSADIA, GEZUU, versa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($182.65)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      0.812 | $225.00        | $182.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
