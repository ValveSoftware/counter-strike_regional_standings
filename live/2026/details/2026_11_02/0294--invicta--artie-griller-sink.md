### Roster Details<br />
Team Name: Invicta<br />
Roster: artie, Griller, SinK<br />
Global Rank: [294](../../standings_global_2026_11_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_11_02.md)<br />
Regional Rank: [196]( ../../standings_europe_2026_11_02.md)<br />
<br />
Final Rank Value:  573.6<br />
<br />
Final Rank Value (573.6) = Starting Rank Value (579.5) + Head To Head Adjustments (-5.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.225[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.096<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.5
- 400 + ( ( 0.096 - 0.000 ) / ( 0.854 - 0.000 ) ) * 1600 = 579.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4775 | 2026-06-12 | ex-Sashi Academy | L   | 0.247      | -            | -                | -                | -         |    -3.21 | artie, Griller, Meldola, SinK, vigg0 |
|            4 |     4781 | 2026-06-12 | Washed           | L   | 0.247      | -            | -                | -                | -         |    -2.96 | artie, Griller, Meldola, SinK, vigg0 |
|            3 |     5371 | 2026-05-23 | antidaun         | L   | 0.114      | -            | -                | -                | -         |    -1.50 | artie, Griller, SinK, slize, Teelz   |
|            2 |     5384 | 2026-05-23 | STATE            | L   | 0.113      | -            | -                | -                | -         |    -0.36 | artie, Griller, SinK, slize, Teelz   |
|            1 |     5407 | 2026-05-23 | Fortress         | W   | 0.111      | 0.341        | 0.000 (0.000)    | 0.127 (0.005)    | 1 (0.111) |     2.15 | artie, Griller, SinK, slize, Teelz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($200.44)
- Divide that value by the 5th highest value among all rosters ($549,790.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.254 | $789.00        | $200.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
